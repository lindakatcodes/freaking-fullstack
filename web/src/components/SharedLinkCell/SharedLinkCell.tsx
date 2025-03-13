import type {
  FindSharedLinkQuery,
  FindSharedLinkQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import SharedLink from '../SharedLink/SharedLink'

export const QUERY: TypedDocumentNode<
  FindSharedLinkQuery,
  FindSharedLinkQueryVariables
> = gql`
  query FindSharedLinkQuery($id: String!) {
    sharedLink: sharedLink(id: $id) {
      id
      title
      url
      submittedBy {
        id
        displayName
        email
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindSharedLinkQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  sharedLink,
}: CellSuccessProps<FindSharedLinkQuery, FindSharedLinkQueryVariables>) => {
  const displayName =
    sharedLink.submittedBy.displayName ||
    sharedLink.submittedBy.email.slice(
      0,
      sharedLink.submittedBy.email.indexOf('@')
    )

  return (
    <div className="pt-2">
      <SharedLink
        linkId={sharedLink.id}
        title={sharedLink.title}
        link={sharedLink.url}
        displayName={displayName}
      />

      {/* comment form */}
      {/* list of comments */}
    </div>
  )
}
