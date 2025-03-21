import type { CommentUserVote } from 'types/graphql'

import { Link } from '@redwoodjs/router'

import UpvoteArrow from '../icons/UpvoteArrow/UpvoteArrow'

interface Props {
  comment: {
    body: string
    createdAt: string
    id: string
    linkId: string
    author: {
      email: string
      displayName?: string
    }
    commentVotes: Partial<CommentUserVote>[]
  }
  handleUpvoteClick: (() => Promise<void>) | (() => void)
  activeUser: number | null
}
const formattedDate = (datetime: ConstructorParameters<typeof Date>[0]) => {
  const parsedDate = new Date(datetime)
  return parsedDate.toLocaleString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
}

const Comment = ({ comment, handleUpvoteClick, activeUser }: Props) => {
  const displayName =
    comment.author.displayName ||
    comment.author.email.slice(0, comment.author.email.indexOf('@'))

  const fillUpvote = !!comment.commentVotes.find(
    (vote) => vote.userId === activeUser
  )

  return (
    <div className="flex gap-2">
      <button className="flex items-start" onClick={handleUpvoteClick}>
        <UpvoteArrow fill={fillUpvote} />
      </button>

      <div className="flex flex-col">
        <div className="flex gap-2 text-sm">
          <Link to="#" className="font-bold underline">
            {displayName}
          </Link>
          <p> • </p>
          <p>{formattedDate(comment.createdAt)}</p>
        </div>
        <p>{comment.body}</p>
      </div>
    </div>
  )
}

export default Comment
