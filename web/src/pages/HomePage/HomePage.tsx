import { Metadata } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'

import SharedLinksCell from 'src/components/SharedLinksCell'

const FeedPage = () => {
  return (
    <>
      <Metadata title="Home" description="Main news feed page" />
      <Toaster />
      <SharedLinksCell />
    </>
  )
}

export default FeedPage
