import type { CommentUserVote } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import UpvoteArrow from '../icons/UpvoteArrow/UpvoteArrow'

interface Props {
  comment: {
    body: string
    createdAt: string
    id: string
    authorId: number
    linkId: string
    author: {
      email: string
      displayName?: string
    }
    commentVotes: Partial<CommentUserVote>[]
  }
  handleUpvoteClick: (() => Promise<void>) | (() => void)
  isUpvoteLogicRunning?: boolean
  handleCommentDeletion: (commentId) => void
  activeUser: number | null
  invertColors?: boolean
  isCommentDeletionRunning?: boolean
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

const Comment = ({
  comment,
  handleUpvoteClick,
  isUpvoteLogicRunning = false,
  handleCommentDeletion,
  activeUser,
  invertColors = false,
  isCommentDeletionRunning = false,
}: Props) => {
  const displayName =
    comment.author.displayName ||
    comment.author.email.slice(0, comment.author.email.indexOf('@'))

  const fillUpvote =
    comment.commentVotes &&
    !!comment.commentVotes.find((vote) => vote.userId === activeUser)

  return (
    <div className={`flex gap-2 ${invertColors && 'text-yellow'}`}>
      <button
        className="flex items-start disabled:opacity-50"
        onClick={handleUpvoteClick}
        disabled={isUpvoteLogicRunning}
      >
        <UpvoteArrow fill={fillUpvote} />
      </button>

      <div className="flex flex-col">
        <div className="flex gap-2 text-sm">
          <Link
            to={routes.userProfile({ id: comment.authorId })}
            className="font-bold underline"
          >
            {displayName}
          </Link>
          <p> • </p>
          <p>{formattedDate(comment.createdAt)}</p>
          {comment.authorId === activeUser && (
            <>
              <p> • </p>
              <button
                className="font-bold underline opacity-90 disabled:opacity-60"
                onClick={() => handleCommentDeletion(comment.id)}
                disabled={isCommentDeletionRunning}
              >
                Delete Comment
              </button>
            </>
          )}
        </div>
        <p>{comment.body}</p>
      </div>
    </div>
  )
}

export default Comment
