import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import UserLinksCell from 'src/components/UserLinksCell'

const UserLinksPage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <Metadata
        title="Shared Links"
        description="Links shared by the active user"
      />

      <UserLinksCell id={currentUser.id} />
    </>
  )
}

export default UserLinksPage
