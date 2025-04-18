import type { UserComments, UserCommentsVariables } from 'types/graphql'

import {
  type CellSuccessProps,
  type CellFailureProps,
  type TypedDocumentNode,
} from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { useCommentDeletion } from 'src/hooks/useCommentDeletion'
import { useCommentVotes } from 'src/hooks/useCommentVotes'

import LinkCommentsCombo from '../LinkCommentsCombo/LinkCommentsCombo'

export const QUERY: TypedDocumentNode<UserComments, UserCommentsVariables> =
  gql`
    query UserComments($id: Int!) {
      user(id: $id) {
        comments {
          link {
            title
          }
          body
          createdAt
          linkId
          id
          authorId
          commentVotes {
            commentId
            userId
            id
          }
          author {
            email
            displayName
          }
        }
      }
    }
  `

export const isEmpty = (data, { isDataEmpty }) => {
  return isDataEmpty(data) || isDataEmpty(data?.user?.comments)
}

export const Loading = () => (
  <div className="p-6 text-center text-xl font-bold text-white">
    Fetching all the comments this user has left...
  </div>
)

export const Empty = () => (
  <div className="p-6 text-center text-xl font-bold text-white">
    Looks like this user hasn&apos;t made any comments yet!
  </div>
)

export const Failure = ({ error }: CellFailureProps<UserCommentsVariables>) => (
  <div className="p-6 text-center text-xl font-bold text-red-500">
    Error: {error?.message}
  </div>
)

export const Success = ({
  user,
  id,
}: CellSuccessProps<UserComments, UserCommentsVariables>) => {
  const { currentUser } = useAuth()

  const {
    handleCommentUpvote,
    handleCommentDownvote,
    loading: commentVoteLoading,
  } = useCommentVotes({
    refetchQueries: [{ query: QUERY, variables: { id } }],
  })

  const { handleCommentDeletion, loading: deleteCommentLoading } =
    useCommentDeletion({
      refetchQueries: [{ query: QUERY, variables: { id } }],
    })

  const commentsByLinkId = user.comments.reduce(
    (acc, comment) => {
      const linkId = comment.linkId
      if (!acc[linkId]) {
        acc[linkId] = []
      }
      acc[linkId].push(comment)
      return acc
    },
    {} as Record<string, typeof user.comments>
  )

  return (
    <section className="grid gap-4 pb-4">
      {Object.entries(commentsByLinkId).map(([key, comments]) => (
        <LinkCommentsCombo
          key={key}
          commentArray={comments}
          currentUser={currentUser ? currentUser.id : 0}
          handleCommentDeletion={handleCommentDeletion}
          handleCommentUpvote={handleCommentUpvote}
          handleCommentDownvote={handleCommentDownvote}
          isCommentVoteRunning={commentVoteLoading}
          isCommentDeleteRunning={deleteCommentLoading}
        />
      ))}
    </section>
  )
}
