import { useState } from 'react'

import type { SharedLinksQuery, SharedLinksQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import { useLinkDeletion } from 'src/hooks/useLinkDeletion'
import { useLinkVotes } from 'src/hooks/useLinkVotes'

import SharedLink from '../SharedLink/SharedLink'

export const QUERY: TypedDocumentNode<
  SharedLinksQuery,
  SharedLinksQueryVariables
> = gql`
  query SharedLinksQuery {
    sharedLinks {
      id
      title
      url
      points
      submittedBy {
        id
        email
        displayName
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
  <div className="p-6 text-center text-xl font-bold">
    Fetching the best news...
  </div>
)

export const Empty = () => (
  <div className="p-6 text-center text-xl font-bold">
    <p>No news is good news?</p>
    <p>It looks like no links have been submitted yet!</p>
    <p>Join or login now to start submitting links for others to see.</p>
  </div>
)

export const Failure = ({
  error,
}: CellFailureProps<SharedLinksQueryVariables>) => (
  <div className="p-6 text-center text-xl font-bold text-red-700">
    Error: {error?.message}
  </div>
)

export const Success = ({
  sharedLinks,
}: CellSuccessProps<SharedLinksQuery, SharedLinksQueryVariables>) => {
  const { currentUser } = useAuth()

  const [activeLinkId, setActiveLinkId] = useState<string | null>(null)

  const {
    handleLinkUpvote,
    handleLinkDownvote,
    loading: linkVoteLoading,
  } = useLinkVotes({
    refetchQueries: [{ query: QUERY }],
  })

  const { handleLinkDeletion, loading: linkDeleteLoading } = useLinkDeletion({
    refetchQueries: [{ query: QUERY }],
  })

  return (
    <ul>
      {sharedLinks.map((link) => {
        const displayName =
          link.submittedBy.displayName ||
          link.submittedBy.email.slice(0, link.submittedBy.email.indexOf('@'))

        const commentCount = link.comments && link.comments.length

        const handleLinkVote = async () => {
          if (!currentUser) {
            toast.error('You need to be signed in to upvote!')
            return
          }

          setActiveLinkId(link.id)
          try {
            const linkToVote = sharedLinks.find(
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
            activeUser={currentUser?.id || null}
            linkVotes={link.linkVotes || []}
            handleLinkDeletion={handleLinkDelete}
            isLinkDeletionRunning={
              linkDeleteLoading && activeLinkId === link.id
            }
            showDeleteButton={
              !!currentUser && currentUser.id === link.submittedBy.id
            }
          />
        )
      })}
    </ul>
  )
}
