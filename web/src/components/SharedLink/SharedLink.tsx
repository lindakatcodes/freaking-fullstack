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
    <div className="flex items-start gap-5 p-2 hover:bg-black hover:text-yellow">
      <div className="mt-2 flex flex-col">
        <button onClick={handleVote}>
          <UpvoteArrow />
        </button>
      </div>

      <div className="flex-1">
        <a
          href={link}
          className="text-5xl font-bold uppercase tracking-tight visited:text-pink-600"
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

      <a href={link} className=" mt-3 flex items-center gap-4">
        {`(${new URL(link).hostname})`}
        <RightArrow />
      </a>
    </div>
  )
}

export default SharedLink
