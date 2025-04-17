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
  isLinkUpvoteRunning?: boolean
  activeUser: number | null
  linkVotes: Partial<LinkUserVote>[]
  invertColors?: boolean
  handleLinkDeletion: (id: string) => void
  isLinkDeletionRunning?: boolean
  showDeleteButton?: boolean
}

const SharedLink = ({
  linkId,
  title,
  points = 0,
  displayName,
  commentCount = 0,
  link,
  handleUpvoteClick,
  isLinkUpvoteRunning = false,
  activeUser,
  linkVotes,
  invertColors = false,
  handleLinkDeletion,
  isLinkDeletionRunning = false,
  showDeleteButton = false,
}: SharedLinkProps) => {
  // title and arrow go to link; displayName goes to user profile; comments goes to link comment page; link text shows domain only and shows all links shared from that domain (maybe skip this and just show the domain and go to the link)

  const fillUpvote = !!(linkVotes || []).find(
    (vote) => vote.userId === activeUser
  )

  return (
    <div
      className={`group flex flex-col gap-2 border-b-2 px-2 py-2 md:flex-row md:items-start md:gap-5 md:py-4  ${!invertColors ? 'border-black hover:bg-black hover:text-yellow' : 'border-yellow bg-black text-yellow hover:bg-yellow hover:text-black'}`}
    >
      <div className="mt-2 flex flex-col">
        <button
          className="disabled:opacity-50"
          onClick={handleUpvoteClick}
          disabled={isLinkUpvoteRunning}
        >
          <UpvoteArrow fill={fillUpvote} />
        </button>
      </div>

      <div>
        <a
          href={link}
          className={`text-balance text-4xl font-bold uppercase tracking-tight md:text-5xl  ${!invertColors ? 'visited:text-pink-700 group-hover:visited:text-pink-400' : 'visited:text-pink-400 group-hover:visited:text-pink-700'}`}
        >
          {title}
        </a>
        <div className="flex items-center gap-3 text-sm md:gap-2">
          <p className="min-w-fit">
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
            className="min-w-fit font-bold underline"
          >
            {commentCount} {commentCount === 1 ? 'comment' : 'comments'}
          </Link>
          {showDeleteButton && (
            <>
              <p> • </p>
              <button
                className="font-bold underline opacity-90 disabled:opacity-60"
                onClick={() => handleLinkDeletion(linkId)}
                disabled={isLinkDeletionRunning}
              >
                Delete Link
              </button>
            </>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 md:mt-3 md:flex-1">
        <Link to="#" className="underline">{`${new URL(link).hostname}`}</Link>
        <a href={link}>
          <RightArrow />
        </a>
      </div>
    </div>
  )
}

export default SharedLink
