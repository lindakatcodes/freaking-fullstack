import type { CommentsQuery, CommentsQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Comment from '../Comment/Comment'

export const QUERY: TypedDocumentNode<CommentsQuery, CommentsQueryVariables> =
  gql`
    query CommentsQuery {
      comments {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<CommentsQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  comments,
}: CellSuccessProps<CommentsQuery, CommentsQueryVariables>) => {
  return (
    <div className="flex flex-col gap-2">
      {comments.map((item) => {
        return <Comment comment={item} key={item.id} />
      })}
    </div>
  )
}
