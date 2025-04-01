import type {
  SharedLinksByUserQuery,
  SharedLinksByUserQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import SharedLink from '../SharedLink/SharedLink'

export const QUERY: TypedDocumentNode<
  SharedLinksByUserQuery,
  SharedLinksByUserQueryVariables
> = gql`
  query SharedLinksByUserQuery($id: Int!) {
    sharedLinksByUser(id: $id) {
      id
      title
      url
      points
      submittedBy {
        email
        displayName
        id
      }
      comments {
        id
      }
      linkVotes {
        linkId
        userId
        id
      }
    }
  }
`

export const Loading = () => (
  <div className="p-6 text-center text-xl font-bold text-white">
    Fetching all the links this user has shared...
  </div>
)

export const Empty = () => (
  <div className="p-6 text-center text-xl font-bold text-white">
    Looks like this user hasn&apos;t shared any links yet!
  </div>
)

export const Failure = ({
  error,
}: CellFailureProps<SharedLinksByUserQueryVariables>) => (
  <div className="p-6 text-center text-xl font-bold text-red-500">
    Error: {error?.message}
  </div>
)

export const Success = ({
  sharedLinksByUser,
}: CellSuccessProps<
  SharedLinksByUserQuery,
  SharedLinksByUserQueryVariables
>) => {
  return (
    <ul>
      {sharedLinksByUser.map((link) => {
        const displayName =
          link.submittedBy.displayName ||
          link.submittedBy.email.slice(0, link.submittedBy.email.indexOf('@'))
        const commentCount = link.comments && link.comments.length
        return (
          <SharedLink
            key={link.id}
            linkId={link.id}
            title={link.title}
            link={link.url}
            points={link.points}
            displayName={displayName}
            commentCount={commentCount}
            handleUpvoteClick={() => {}}
            activeUser={link.submittedBy.id || null}
            linkVotes={link.linkVotes || []}
            invertColors={true}
          />
        )
      })}
    </ul>
  )
}
