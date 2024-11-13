// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const FeedPage = () => {
  return (
    <>
      <Metadata title="Feed" description="Main feed page" />
      <div className="relative h-[8.5rem] w-full bg-black">
        <h1 className="text-nowrap font-serif text-[11rem] font-bold leading-[0.875] tracking-wider text-yellow antialiased">
          Brazilian Nut <span className="text-outline text-black">News</span>
        </h1>
        <p className="fixed right-0 top-20 bg-black px-4 font-display uppercase text-yellow">
          Where the best news rises to the top
        </p>
      </div>
    </>
  )
}

export default FeedPage
