import { Metadata } from '@redwoodjs/web'

import UserProfileCell from 'src/components/UserProfileCell'

interface Props {
  id: number
}

const UserProfilePage = ({ id }: Props) => {
  return (
    <>
      <Metadata title="User Profile" description="user profile page" />

      <UserProfileCell id={id} />
    </>
  )
}

export default UserProfilePage
