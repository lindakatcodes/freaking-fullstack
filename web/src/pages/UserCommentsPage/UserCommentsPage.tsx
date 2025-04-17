import { Metadata } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import UserCommentsCell from 'src/components/UserCommentsCell'

const UserCommentsPage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <Metadata
        title="User Comments"
        description="Comments written by the active user"
      />
      <Toaster />
      <UserCommentsCell id={currentUser.id} />
    </>
  )
}

export default UserCommentsPage
