import { useEffect } from 'react'

import Header from 'src/components/Header/Header'

type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  useEffect(() => {
    document.body.className = 'bg-black'
    return () => {
      document.body.className = ''
    }
  }, [])

  return (
    <main className="h-dvh w-dvw">
      <Header />
      {children}
    </main>
  )
}

export default AuthLayout
