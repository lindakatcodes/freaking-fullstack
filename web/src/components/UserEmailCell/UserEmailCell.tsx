import type { UserProfileInfo, UserProfileInfoVariables } from 'types/graphql'

import type { CellSuccessProps, TypedDocumentNode } from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  UserProfileInfo,
  UserProfileInfoVariables
> = gql`
  query FindUserEmailQuery($id: Int!) {
    user(id: $id) {
      email
    }
  }
`

export const Loading = () => (
  <div className="flex flex-col gap-2 pt-2 md:flex-row">
    <h2 className="text-outline-white font-serif text-5xl font-bold leading-[0.875] tracking-wider text-black md:text-[clamp(3rem,8vw,9rem)]">
      fetching
    </h2>
    <h2 className="font-serif text-5xl font-bold leading-[0.875] tracking-wider text-blue md:text-[clamp(3rem,8vw,9rem)]">
      user email...
    </h2>
  </div>
)

export const Success = ({
  user,
}: CellSuccessProps<UserProfileInfo, UserProfileInfoVariables>) => {
  const first = user.email.slice(0, user.email.indexOf('@'))
  const last = user.email.slice(user.email.indexOf('@'))

  return (
    <div className="flex flex-col gap-2 pt-2 md:flex-row">
      <h2 className="text-outline-white font-serif text-5xl font-bold leading-[0.875] tracking-wider text-black md:text-[clamp(3rem,8vw,9rem)]">
        {first}
      </h2>
      <h2 className="font-serif text-5xl font-bold leading-[0.875] tracking-wider text-blue md:text-[clamp(3rem,8vw,9rem)]">
        {last}
      </h2>
    </div>
  )
}
