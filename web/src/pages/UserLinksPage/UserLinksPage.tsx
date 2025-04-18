import { Metadata } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'

import UserLinksCell from 'src/components/UserLinksCell'

interface Props {
  id: number
}

const UserLinksPage = ({ id }: Props) => {
  return (
    <>
      <Metadata
        title="Shared Links"
        description="Links shared by the active user"
      />
      <Toaster />
      <UserLinksCell id={id} />
    </>
  )
}

export default UserLinksPage
