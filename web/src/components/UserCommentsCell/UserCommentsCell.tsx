import type {
  UserCommentsQuery,
  UserCommentsQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  UserCommentsQuery,
  UserCommentsQueryVariables
> = gql`
  query UserComments($id: Int!) {
    user(id: $id) {
      comments {
        link {
          title
          url
        }
        body
        createdAt
        linkId
      }
    }
  }
`

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

export const Failure = ({
  error,
}: CellFailureProps<UserCommentsQueryVariables>) => (
  <div className="p-6 text-center text-xl font-bold text-red-500">
    Error: {error?.message}
  </div>
)

export const Success = ({
  user,
}: CellSuccessProps<UserCommentsQuery, UserCommentsQueryVariables>) => {
  return (
    <ul>
      {user.comments.map((item) => {
        return (
          <li className="text-xl text-white" key={item.id}>
            {JSON.stringify(item)}
          </li>
        )
      })}
    </ul>
  )
}
