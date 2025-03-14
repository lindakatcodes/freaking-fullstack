import type { CommentsQuery, CommentsQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Comment from '../Comment/Comment'

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
  <div className="mt-8 text-center text-xl font-bold text-red-600">
    Error: {error?.message}
  </div>
)

export const Success = ({
  comments,
}: CellSuccessProps<CommentsQuery, CommentsQueryVariables>) => {
  return (
    <div className="flex flex-col gap-4">
      {comments.map((item) => {
        return <Comment comment={item} key={item.id} />
      })}
    </div>
  )
}
