import type { UserProfileInfo, UserProfileInfoVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

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

  return (
    <section className="grid grid-cols-2 gap-4 text-lg">
      <div>
        <div className="flex gap-2">
          <p className="font-bold uppercase text-yellow">display name:</p>
          <p className="text-white">{displayName}</p>
        </div>
        <div className="flex gap-2">
          <p className="font-bold uppercase text-yellow">account created:</p>
          <p className="text-white">{formattedDate(user.createdAt)}</p>
        </div>
        <div className="flex gap-2">
          <p className="font-bold uppercase text-yellow">upvotes given:</p>
          <p className="text-white">links+comments upvoted count</p>
        </div>
        <div className="flex gap-2">
          <p className="font-bold uppercase text-yellow">upvotes received:</p>
          <p className="text-white">votes on their links+comments</p>
        </div>
      </div>
      <div>Socials</div>
    </section>
  )
}
