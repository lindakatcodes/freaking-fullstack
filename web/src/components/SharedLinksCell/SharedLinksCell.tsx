import type { SharedLinksQuery, SharedLinksQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import SharedLink from '../SharedLink/SharedLink'

export const QUERY: TypedDocumentNode<
  SharedLinksQuery,
  SharedLinksQueryVariables
> = gql`
  query SharedLinksQuery {
    sharedLinks {
      title
      url
      submittedBy {
        email
        displayName
      }
    }
  }
`

export const Loading = () => (
  <div className="p-6 text-center">Fetching the best news...</div>
)

export const Empty = () => (
  <div className="p-6 text-center">
    <p>No news is good news?</p>
    <p>It looks like no links have been submitted yet!</p>
    <p>Join or login now to start submitting links for others to see.</p>
  </div>
)

export const Failure = ({
  error,
}: CellFailureProps<SharedLinksQueryVariables>) => (
  <div className="p-6 text-center text-red-700">Error: {error?.message}</div>
)

export const Success = ({
  sharedLinks,
}: CellSuccessProps<SharedLinksQuery, SharedLinksQueryVariables>) => {
  return (
    <ul>
      {sharedLinks.map((link) => {
        const displayName =
          link.submittedBy.displayName ??
          link.submittedBy.email.slice(0, link.submittedBy.email.indexOf('@'))
        return (
          <SharedLink
            key={link.title}
            title={link.title}
            link={link.url}
            displayName={displayName}
          />
        )
      })}
    </ul>
  )
}
