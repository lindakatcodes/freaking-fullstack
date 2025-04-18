import { useState } from 'react'

import type {
  SharedLinksByUserQuery,
  SharedLinksByUserQueryVariables,
} from 'types/graphql'

import {
  type CellSuccessProps,
  type CellFailureProps,
  type TypedDocumentNode,
} from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { useLinkDeletion } from 'src/hooks/useLinkDeletion'
import { useLinkVotes } from 'src/hooks/useLinkVotes'

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
  const { currentUser } = useAuth()

  const [activeLinkId, setActiveLinkId] = useState<string | null>(null)

  const {
    handleLinkUpvote,
    handleLinkDownvote,
    loading: linkVoteLoading,
  } = useLinkVotes({
    refetchQueries: [{ query: QUERY, variables: { id: currentUser.id } }],
  })

  const { handleLinkDeletion, loading: linkDeleteLoading } = useLinkDeletion({
    refetchQueries: [{ query: QUERY, variables: { id: currentUser.id } }],
  })

  return (
    <ul>
      {sharedLinksByUser.map((link) => {
        const displayName =
          link.submittedBy.displayName ||
          link.submittedBy.email.slice(0, link.submittedBy.email.indexOf('@'))

        const commentCount = link.comments && link.comments.length

        const handleLinkVote = async () => {
          setActiveLinkId(link.id)
          try {
            const linkToVote = sharedLinksByUser.find(
              (tempLink) => tempLink.id === link.id
            )
            const userUpvoteStatus = linkToVote.linkVotes?.find(
              (vote) => vote.userId === currentUser.id
            )

            if (!userUpvoteStatus) {
              await handleLinkUpvote(link.id, currentUser.id)
            } else {
              await handleLinkDownvote(userUpvoteStatus.id)
            }
          } finally {
            setActiveLinkId(null)
          }
        }

        const handleLinkDelete = async () => {
          setActiveLinkId(link.id)
          try {
            await handleLinkDeletion(link.id)
          } finally {
            setActiveLinkId(null)
          }
        }

        return (
          <SharedLink
            key={link.id}
            linkId={link.id}
            submittedById={link.submittedBy.id}
            title={link.title}
            link={link.url}
            points={link.points}
            displayName={displayName}
            commentCount={commentCount}
            handleUpvoteClick={handleLinkVote}
            isLinkUpvoteRunning={linkVoteLoading && activeLinkId === link.id}
            activeUser={link.submittedBy.id || null}
            linkVotes={link.linkVotes || []}
            invertColors={true}
            handleLinkDeletion={handleLinkDelete}
            isLinkDeletionRunning={
              linkDeleteLoading && activeLinkId === link.id
            }
            showDeleteButton={
              currentUser && currentUser.id === link.submittedBy.id
            }
          />
        )
      })}
    </ul>
  )
}
