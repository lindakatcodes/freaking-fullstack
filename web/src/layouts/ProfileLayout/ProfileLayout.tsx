import { useEffect } from 'react'

import { useAuth } from 'src/auth'
import Header from 'src/components/Header/Header'
import ProfileNavigation from 'src/components/ProfileNavigation/ProfileNavigation'

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

  const { currentUser } = useAuth()

  const first = currentUser.email.slice(0, currentUser.email.indexOf('@'))
  const last = currentUser.email.slice(currentUser.email.indexOf('@'))

  return (
    <main className="h-dvh w-dvw px-6">
      <Header />
      <div className="@container flex pt-2">
        <h2 className="text-outline-white font-serif text-[9cqw] font-bold leading-[0.875] tracking-wider text-black">
          {first}
        </h2>
        <h2 className="font-serif text-[9cqw] font-bold leading-[0.875] tracking-wider text-blue">
          {last}
        </h2>
      </div>
      <ProfileNavigation />
      {children}
    </main>
  )
}

export default ProfileLayout
