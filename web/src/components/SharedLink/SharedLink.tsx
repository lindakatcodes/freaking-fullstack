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

  return (
    <div className="flex gap-5">
      <div className="flex flex-col">
        <button onClick={handleVote}>Vote up</button>
        <button>Vote down</button>
      </div>
      <div className="flex-1">
        <h2>{title}</h2>
        <p>
          <span data-testid="point">{points}</span> points • submitted by{' '}
          {username} • {commentCount} comments
        </p>
      </div>
      <a href={link}>ARROW</a>
    </div>
  )
}

export default SharedLink
