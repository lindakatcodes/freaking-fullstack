import { Metadata } from '@redwoodjs/web'

import SharedLinksCell from 'src/components/SharedLinksCell'

const FeedPage = () => {
  return (
    <>
      <Metadata title="Home" description="Main news feed page" />
      <SharedLinksCell />
    </>
  )
}

export default FeedPage
