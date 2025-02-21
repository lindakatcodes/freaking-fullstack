import { Link } from '@redwoodjs/router'

import RightArrow from '../icons/RightArrow/RightArrow'
import UpvoteArrow from '../icons/UpvoteArrow/UpvoteArrow'

interface SharedLinkProps {
  title: string
  points?: number
  username: string
  commentCount?: number
  link: string
  voteUp?: () => void
}

const SharedLink = ({
  title,
  points = 0,
  username,
  commentCount = 0,
  link,
  voteUp = () => {},
}: SharedLinkProps) => {
  const handleVote = () => {
    voteUp()
    console.log('vote up!')
  }

  // title and arrow go to link; username goes to user profile; comments goes to link comment page; link text shows domain only and shows all links shared from that domain (maybe skip this and just show the domain and go to the link)

  return (
    <div className="group flex items-start gap-5 border-b-2 border-black px-2 py-3 hover:bg-black hover:text-yellow">
      <div className="mt-2 flex flex-col">
        <button onClick={handleVote}>
          <UpvoteArrow />
        </button>
      </div>

      <div className="">
        <a
          href={link}
          className="text-5xl font-bold uppercase tracking-tight visited:text-pink-700 group-hover:visited:text-pink-400"
        >
          {title}
        </a>
        <div className="flex gap-2 text-sm">
          <p>
            <span data-testid="point">{points}</span> points
          </p>
          <p> • </p>
          <p>
            submitted by{' '}
            <Link to="#" className="font-bold underline">
              {username}
            </Link>
          </p>
          <p> • </p>
          <Link to="#" className="font-bold underline">
            {commentCount} {commentCount === 1 ? 'comment' : 'comments'}
          </Link>
        </div>
      </div>

      <div className="mt-3 flex flex-1 items-center justify-between gap-4">
        <Link to="#" className="underline">{`${new URL(link).hostname}`}</Link>
        <a href={link}>
          <RightArrow />
        </a>
      </div>
    </div>
  )
}

export default SharedLink
