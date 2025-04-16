import type {
  SharedLinksByUserQuery,
  SharedLinksByUserQueryVariables,
} from 'types/graphql'

import {
  type CellSuccessProps,
  type CellFailureProps,
  type TypedDocumentNode,
  useMutation,
} from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

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

export const DELETE_SHARED_LINK = gql`
  mutation DeleteSharedLink($id: String!) {
    deleteSharedLink(id: $id) {
      id
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
  const { currentUser } = useAuth()

  const [deleteSharedLink, { loading }] = useMutation(DELETE_SHARED_LINK, {
    onCompleted: () => {
      console.log('link has been deleted')
    },
    onError: (error) => {
      toast(`Sorry, there was an issue deleting this link: ${error.message}`)
    },
    refetchQueries: [{ query: QUERY, variables: { id: currentUser.id } }],
  })

  return (
    <ul>
      {sharedLinksByUser.map((link) => {
        const displayName =
          link.submittedBy.displayName ||
          link.submittedBy.email.slice(0, link.submittedBy.email.indexOf('@'))
        const commentCount = link.comments && link.comments.length

        const deleteLinkHandler = async (linkId: string) => {
          deleteSharedLink({ variables: { id: linkId } })
        }

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
            handleLinkDeletion={deleteLinkHandler}
            isLinkDeletionRunning={loading}
            showDeleteButton={true}
          />
        )
      })}
    </ul>
  )
}
