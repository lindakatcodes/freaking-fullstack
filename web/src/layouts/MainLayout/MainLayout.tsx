import { useEffect } from 'react'

import Header from 'src/components/Header/Header'
import Navigation from 'src/components/Navigation/Navigation'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  useEffect(() => {
    document.body.className = 'bg-yellow'
    return () => {
      document.body.className = ''
    }
  }, [])

  return (
    <main className="h-dvh w-dvw">
      <Navigation />
      <Header />
      {children}
    </main>
  )
}

export default MainLayout
