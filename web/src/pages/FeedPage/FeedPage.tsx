// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const FeedPage = () => {
  return (
    <>
      <Metadata title="Feed" description="Main feed page" />
      <div className="relative h-[8.5rem] w-full bg-black">
        <h1 className="text-yellow text-nowrap font-serif text-[11rem] font-bold leading-[0.875] tracking-wider antialiased">
          Brazilian Nut <span className="text-outline text-black">News</span>
        </h1>
        <p className="font-display text-yellow fixed right-0 top-20 bg-black px-4 uppercase">
          Where the best news rises to the top
        </p>
      </div>
    </>
  )
}

export default FeedPage
