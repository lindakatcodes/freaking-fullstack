import { UserComments } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import Comment from '../Comment/Comment'
import RightArrow from '../icons/RightArrow/RightArrow'

const LinkCommentsCombo = ({
  commentArray,
  currentUser,
  handleCommentDeletion,
  isCommentDeletionRunning = false,
}: {
  commentArray: UserComments['user']['comments']
  currentUser: number
  handleCommentDeletion: (commentId) => void
  isCommentDeletionRunning?: boolean
}) => {
  return (
    <section>
      <Link
        to={routes.linkDetails({ id: commentArray[0].linkId })}
        className="mb-1 flex items-center justify-between text-balance text-2xl font-bold uppercase tracking-tight text-yellow md:text-5xl"
      >
        {commentArray[0].link?.title}
        <RightArrow />
      </Link>
      <ul className="grid gap-2">
        {commentArray.map((comment) => (
          <Comment
            comment={comment}
            key={comment.createdAt}
            handleUpvoteClick={() => {}}
            activeUser={currentUser}
            invertColors={true}
            isCommentDeletionRunning={isCommentDeletionRunning}
            handleCommentDeletion={handleCommentDeletion}
          />
        ))}
      </ul>
      <div className="mt-2 border border-yellow" />
    </section>
  )
}

export default LinkCommentsCombo
