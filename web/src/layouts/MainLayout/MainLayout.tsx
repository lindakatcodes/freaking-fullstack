import Header from 'src/components/Header/Header'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="grid grid-cols-1 grid-rows-2">
      <Header />
      {children}
    </div>
  )
}

export default MainLayout
