import type {
  CommentsQuery,
  CommentsQueryVariables,
  CommentUserVote,
} from 'types/graphql'

import {
  type CellSuccessProps,
  type CellFailureProps,
  type TypedDocumentNode,
  useMutation,
} from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

import Comment from '../Comment/Comment'
import { QUERY as SharedLinkQuery } from '../SharedLinkCell'

export const QUERY: TypedDocumentNode<CommentsQuery, CommentsQueryVariables> =
  gql`
    query CommentsQuery($linkId: String!) {
      comments(linkId: $linkId) {
        body
        createdAt
        id
        linkId
        author {
          email
          displayName
        }
        commentVotes {
          commentId
          userId
          id
        }
      }
    }
  `
export const CREATE_COMMENT_VOTE = gql`
  mutation CreateCommentVote($input: CreateCommentUserVoteInput!) {
    createCommentUserVote(input: $input) {
      id
    }
  }
`

export const DELETE_COMMENT_VOTE = gql`
  mutation DeleteCommentVote($id: String!) {
    deleteCommentUserVote(id: $id) {
      id
    }
  }
`

export const Loading = () => (
  <div className="mt-8 text-center text-xl font-bold">Loading comments...</div>
)

export const Empty = () => (
  <div className="mt-8 text-center text-xl font-bold">
    No comments yet. Add one in the form above to start the conversation!
  </div>
)

export const Failure = ({
  error,
}: CellFailureProps<CommentsQueryVariables>) => (
  <div className="mt-8 text-center text-xl font-bold text-red-700">
    Error: {error?.message}
  </div>
)

export const Success = ({
  comments,
  linkId,
}: CellSuccessProps<CommentsQuery, CommentsQueryVariables>) => {
  const { currentUser } = useAuth()

  const [createCommentUserVote] = useMutation(CREATE_COMMENT_VOTE, {
    onCompleted: () => {
      console.log('comment upvoted')
    },
    refetchQueries: [
      { query: QUERY, variables: { linkId } },
      { query: SharedLinkQuery, variables: { id: linkId } },
    ],
  })

  const [deleteCommentUserVote] = useMutation(DELETE_COMMENT_VOTE, {
    onCompleted: () => {
      console.log('comment upvote removed')
    },
    refetchQueries: [
      { query: QUERY, variables: { linkId } },
      { query: SharedLinkQuery, variables: { id: linkId } },
    ],
  })

  if (!currentUser) {
    return (
      <div className="flex flex-col gap-4">
        {comments.map((comment) => (
          <Comment
            comment={comment}
            key={comment.id}
            handleUpvoteClick={() => {
              toast.error('You need to be signed in to upvote!')
            }}
            activeUser={null}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      {comments.map((comment) => {
        const handleCommentUpvote = async () => {
          const userUpvoteStatus: Partial<CommentUserVote> | undefined =
            comment.commentVotes.find((vote) => vote.userId === currentUser.id)

          if (!userUpvoteStatus) {
            const upvote = {
              commentId: comment.id,
              userId: currentUser.id,
            }
            createCommentUserVote({ variables: { input: upvote } })
          } else {
            deleteCommentUserVote({ variables: { id: userUpvoteStatus.id } })
          }
        }

        return (
          <Comment
            comment={comment}
            key={comment.id}
            handleUpvoteClick={handleCommentUpvote}
            activeUser={currentUser.id}
          />
        )
      })}
    </div>
  )
}
