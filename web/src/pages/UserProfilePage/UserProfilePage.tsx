import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import UserProfileCell from 'src/components/UserProfileCell'

const UserProfilePage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <Metadata title="User Profile" description="user profile page" />

      <UserProfileCell id={currentUser.id} />
    </>
  )
}

export default UserProfilePage
