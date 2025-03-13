import { Link } from '@redwoodjs/router'

import UpvoteArrow from '../icons/UpvoteArrow/UpvoteArrow'

interface Props {
  comment: {
    name: string
    createdAt: string
    body: string
  }
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

const Comment = ({ comment }: Props) => {
  return (
    <div className="flex gap-2">
      <button className="flex items-start">
        <UpvoteArrow />
      </button>

      <div className="flex flex-col">
        <div className="flex gap-2 text-sm">
          <Link to="#" className="font-bold underline">
            {comment.name}
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
