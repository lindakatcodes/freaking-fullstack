import Header from 'src/components/Header/Header'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="h-dvh w-full bg-yellow">
      <Header />
      {children}
    </main>
  )
}

export default MainLayout
