import type {
  FindUserDataQuery,
  FindUserDataQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, TypedDocumentNode } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EditUserProfileForm from '../EditUserProfileForm/EditUserProfileForm'

export const QUERY: TypedDocumentNode<
  FindUserDataQuery,
  FindUserDataQueryVariables
> = gql`
  query FindUserDataQuery($id: Int!) {
    user(id: $id) {
      id
      displayName
      youtube
      linkedin
      github
      twitch
      bluesky
      website
    }
  }
`

const UPDATE_USER = gql`
  mutation UpdateUserMutation($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      email
      id
      displayName
    }
  }
`

export const Loading = () => (
  <div className="text-center text-xl font-bold text-white">
    Fetching your current user data...
  </div>
)

export const Success = ({
  user,
}: CellSuccessProps<FindUserDataQuery, FindUserDataQueryVariables>) => {
  const [updateUser, { loading, error }] = useMutation(UPDATE_USER, {
    onCompleted: () => {
      toast.success('Your data has been updated!')
    },
  })

  const onSubmit = async (data: Record<string, string>) => {
    updateUser({ variables: { id: user.id, input: data } })
  }

  return (
    <EditUserProfileForm
      initialUserData={user}
      loading={loading}
      error={error}
      onSubmit={onSubmit}
    />
  )
}
