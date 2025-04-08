import type { UserProfileInfo, UserProfileInfoVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Bluesky from '../icons/Bluesky/Bluesky'
import Github from '../icons/Github/Github'
import Globe from '../icons/Globe/Globe'
import LinkedIn from '../icons/LinkedIn/LinkedIn'
import Twitch from '../icons/Twitch/Twitch'
import Youtube from '../icons/Youtube/Youtube'

export const QUERY: TypedDocumentNode<
  UserProfileInfo,
  UserProfileInfoVariables
> = gql`
  query UserProfileInfo($id: Int!) {
    user(id: $id) {
      bluesky
      displayName
      createdAt
      email
      github
      linkedin
      twitch
      website
      youtube
      commentVotes {
        id
      }
      comments {
        commentVotes {
          id
        }
      }
      linkVotes {
        id
      }
      sharedLinks {
        linkVotes {
          id
        }
      }
    }
  }
`

export const Loading = () => (
  <div className="p-6 text-center text-xl font-bold text-white">
    Fetching user data...
  </div>
)

export const Failure = ({
  error,
}: CellFailureProps<UserProfileInfoVariables>) => (
  <div className="p-6 text-center text-xl font-bold text-red-500">
    Error: {error?.message}
  </div>
)

export const Success = ({
  user,
}: CellSuccessProps<UserProfileInfo, UserProfileInfoVariables>) => {
  const displayName =
    user.displayName || user.email.slice(0, user.email.indexOf('@'))

  const formattedDate = (datetime: ConstructorParameters<typeof Date>[0]) => {
    const parsedDate = new Date(datetime)
    return parsedDate.toLocaleString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    })
  }

  const votesGiven =
    (user.commentVotes ? user.commentVotes.length : 0) +
    (user.linkVotes ? user.linkVotes.length : 0)

  const commentVotesReceived = !user.comments
    ? 0
    : user.comments
        .map((comment) => comment.commentVotes.length || 0)
        .reduce((acc, num) => {
          return acc + num
        }, 0)

  const linkVotesReceived = !user.sharedLinks
    ? 0
    : user.sharedLinks
        .map((link) => link.linkVotes.length || 0)
        .reduce((acc, num) => {
          return acc + num
        }, 0)

  const votesReceived = commentVotesReceived + linkVotesReceived

  return (
    <section className="grid grid-cols-2 gap-4 text-lg">
      <div>
        <div className="mb-1 flex gap-2">
          <p className="font-bold uppercase text-yellow">display name:</p>
          <p className="text-white">{displayName}</p>
        </div>
        <div className="mb-1 flex gap-2">
          <p className="font-bold uppercase text-yellow">account created:</p>
          <p className="text-white">{formattedDate(user.createdAt)}</p>
        </div>
        <div className="mb-1 flex gap-2">
          <p className="font-bold uppercase text-yellow">upvotes given:</p>
          <p className="text-white" data-testid="votesGiven">
            {votesGiven}
          </p>
        </div>
        <div className="mb-1 flex gap-2">
          <p className="font-bold uppercase text-yellow">upvotes received:</p>
          <p className="text-white" data-testid="votesReceived">
            {votesReceived}
          </p>
        </div>
      </div>
      <div className="grid items-start gap-3 text-yellow">
        {user.website && (
          <div className="flex items-end gap-2">
            <Globe />
            <a href={user.website} className="grow text-white underline">
              {user.website}
            </a>
          </div>
        )}
        {user.github && (
          <div className="flex items-end gap-2">
            <Github />
            <a href={user.github} className="grow text-white underline">
              {user.github}
            </a>
          </div>
        )}
        {user.bluesky && (
          <div className="flex items-end gap-2">
            <Bluesky />
            <a href={user.bluesky} className="grow text-white underline">
              {user.bluesky}
            </a>
          </div>
        )}
        {user.linkedin && (
          <div className="flex items-end gap-2">
            <LinkedIn />
            <a href={user.linkedin} className="grow text-white underline">
              {user.linkedin}
            </a>
          </div>
        )}
        {user.twitch && (
          <div className="flex items-end gap-2">
            <Twitch />
            <a href={user.twitch} className="grow text-white underline">
              {user.twitch}
            </a>
          </div>
        )}
        {user.youtube && (
          <div className="flex items-end gap-2">
            <Youtube />
            <a href={user.youtube} className="grow text-white underline">
              {user.youtube}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
