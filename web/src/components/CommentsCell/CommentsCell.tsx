import { useState } from 'react'

import type { CommentsQuery, CommentsQueryVariables } from 'types/graphql'

import {
  type CellSuccessProps,
  type CellFailureProps,
  type TypedDocumentNode,
  useMutation,
} from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import { useCommentVotes } from 'src/hooks/useCommentVotes'
import { DELETE_COMMENT } from 'src/mutations'

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
        authorId
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

  const [activeCommentId, setActiveCommentId] = useState<string | null>(null)

  const { handleCommentUpvote, handleCommentDownvote } = useCommentVotes({
    refetchQueries: [
      { query: QUERY, variables: { linkId } },
      { query: SharedLinkQuery, variables: { id: linkId } },
    ],
  })

  const [deleteComment, { loading }] = useMutation(DELETE_COMMENT, {
    onCompleted: () => {
      console.log('comment has been deleted')
    },
    onError: (error) => {
      toast(`Sorry, there was an issue deleting this comment: ${error.message}`)
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
            handleCommentDeletion={() => {}}
            activeUser={null}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      {comments.map((comment) => {
        const handleCommentVote = async () => {
          setActiveCommentId(comment.id)
          try {
            const userUpvoteStatus = comment.commentVotes.find(
              (vote) => vote.userId === currentUser.id
            )

            if (!userUpvoteStatus) {
              await handleCommentUpvote(comment.id, currentUser.id)
            } else {
              await handleCommentDownvote(userUpvoteStatus.id)
            }
          } finally {
            setActiveCommentId(null)
          }
        }

        const deleteCommentHandler = async (commentId: string) => {
          deleteComment({ variables: { id: commentId } })
        }

        return (
          <Comment
            comment={comment}
            key={comment.id}
            handleUpvoteClick={handleCommentVote}
            isUpvoteLogicRunning={activeCommentId === comment.id}
            handleCommentDeletion={deleteCommentHandler}
            activeUser={currentUser.id}
            isCommentDeletionRunning={loading}
          />
        )
      })}
    </div>
  )
}
