import { Metadata } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'

import UserCommentsCell from 'src/components/UserCommentsCell'

interface Props {
  id: number
}

const UserCommentsPage = ({ id }: Props) => {
  return (
    <>
      <Metadata
        title="User Comments"
        description="Comments written by the active user"
      />
      <Toaster />
      <UserCommentsCell id={id} />
    </>
  )
}

export default UserCommentsPage
