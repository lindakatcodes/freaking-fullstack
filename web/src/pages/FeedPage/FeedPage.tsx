// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import SharedLink from 'src/components/SharedLink/SharedLink'

const FeedPage = () => {
  return (
    <>
      <Metadata title="Feed" description="Feed page" />

      <h1>FeedPage</h1>

      <SharedLink
        title={''}
        points={0}
        username={''}
        commentCount={0}
        link={''}
      />
    </>
  )
}

export default FeedPage
