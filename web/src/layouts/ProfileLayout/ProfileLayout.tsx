import { useEffect } from 'react'

import { useParams } from '@redwoodjs/router'

import Header from 'src/components/Header/Header'
import ProfileNavigation from 'src/components/ProfileNavigation/ProfileNavigation'
import UserEmailCell from 'src/components/UserEmailCell'

type ProfileLayoutProps = {
  children?: React.ReactNode
}

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  useEffect(() => {
    document.body.className = 'bg-black'
    return () => {
      document.body.className = ''
    }
  }, [])

  const { id } = useParams()

  return (
    <main className="h-dvh w-dvw px-3 md:px-6">
      <Header />
      <UserEmailCell id={Number(id)} />
      <ProfileNavigation />
      {children}
    </main>
  )
}

export default ProfileLayout
