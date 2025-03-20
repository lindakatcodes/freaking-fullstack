import type {
  SharedLinksQuery,
  SharedLinksQueryVariables,
  LinkUserVote,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

import SharedLink from '../SharedLink/SharedLink'
import { CREATE_LINK_VOTE, DELETE_LINK_VOTE } from '../SharedLinkCell'

export const QUERY: TypedDocumentNode<
  SharedLinksQuery,
  SharedLinksQueryVariables
> = gql`
  query SharedLinksQuery {
    sharedLinks {
      id
      title
      url
      submittedBy {
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
  const { currentUser } = useAuth()

  const [createLinkUserVote] = useMutation(CREATE_LINK_VOTE, {
    onCompleted: () => {
      console.log('link upvoted')
    },
    refetchQueries: [{ query: QUERY }],
  })

  const [deleteLinkUserVote] = useMutation(DELETE_LINK_VOTE, {
    onCompleted: () => {
      console.log('link upvote removed')
    },
    refetchQueries: [{ query: QUERY }],
  })

  const handleLinkUpvote = async (linkId: string) => {
    if (!currentUser) {
      toast.error('You need to be signed in to upvote!')
      return
    }

    const link = sharedLinks.find((link) => link.id === linkId)
    const userUpvoteStatus: Partial<LinkUserVote> | undefined =
      link.linkVotes?.find((vote) => vote.userId === currentUser.id)

    if (!userUpvoteStatus) {
      const upvote = {
        linkId: linkId,
        userId: currentUser.id,
      }
      createLinkUserVote({ variables: { input: upvote } })
    } else {
      deleteLinkUserVote({ variables: { id: userUpvoteStatus.id } })
    }
  }

  return (
    <ul>
      {sharedLinks.map((link) => {
        const displayName =
          link.submittedBy.displayName ||
          link.submittedBy.email.slice(0, link.submittedBy.email.indexOf('@'))
        const commentCount = link.comments.length
        return (
          <SharedLink
            key={link.id}
            linkId={link.id}
            title={link.title}
            link={link.url}
            displayName={displayName}
            commentCount={commentCount}
            handleUpvoteClick={() => handleLinkUpvote(link.id)}
            activeUser={currentUser?.id || null}
            linkVotes={link.linkVotes || []}
          />
        )
      })}
    </ul>
  )
}
