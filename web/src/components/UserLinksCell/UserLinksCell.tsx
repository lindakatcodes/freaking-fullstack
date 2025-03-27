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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<SharedLinksByUserQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
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
          />
        )
      })}
    </ul>
  )
}
