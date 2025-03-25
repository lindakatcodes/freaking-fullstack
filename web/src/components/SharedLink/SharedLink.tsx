import { LinkUserVote } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import RightArrow from '../icons/RightArrow/RightArrow'
import UpvoteArrow from '../icons/UpvoteArrow/UpvoteArrow'

interface SharedLinkProps {
  linkId: string
  title: string
  points: number
  displayName: string
  commentCount?: number
  link: string
  handleUpvoteClick: () => void
  activeUser: number | null
  linkVotes: Partial<LinkUserVote>[]
}

const SharedLink = ({
  linkId,
  title,
  points = 0,
  displayName,
  commentCount = 0,
  link,
  handleUpvoteClick,
  activeUser,
  linkVotes,
}: SharedLinkProps) => {
  // title and arrow go to link; displayName goes to user profile; comments goes to link comment page; link text shows domain only and shows all links shared from that domain (maybe skip this and just show the domain and go to the link)

  const fillUpvote = !!(linkVotes || []).find(
    (vote) => vote.userId === activeUser
  )

  return (
    <div className="group flex items-start gap-5 border-b-2 border-black px-2 py-4 hover:bg-black hover:text-yellow">
      <div className="mt-2 flex flex-col">
        <button onClick={handleUpvoteClick}>
          <UpvoteArrow fill={fillUpvote} />
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
            <span data-testid="point">{points}</span>{' '}
            {points === 1 ? 'point' : 'points'}
          </p>
          <p> • </p>
          <p>
            submitted by{' '}
            <Link to="#" className="font-bold underline">
              {displayName}
            </Link>
          </p>
          <p> • </p>
          <Link
            to={routes.linkDetails({ id: linkId })}
            className="font-bold underline"
          >
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
