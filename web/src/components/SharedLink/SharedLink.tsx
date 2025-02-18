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
    <div className="flex gap-5">
      <div className="border border-green-700">
        <button onClick={handleVote}>
          <UpvoteArrow />
        </button>
      </div>

      <div className="flex-1 border border-red-700">
        <a href={link} className="text-5xl font-bold uppercase">
          {title}
        </a>
        <p className="text-sm">
          <span data-testid="point">{points}</span> points • submitted by{' '}
          {username} • {commentCount}{' '}
          {commentCount === 1 ? 'comment' : 'comments'}
        </p>
      </div>

      <a href={link} className="border-blue-700 flex items-center gap-4 border">
        {`(${link})`}
        <RightArrow />
      </a>
    </div>
  )
}

export default SharedLink
