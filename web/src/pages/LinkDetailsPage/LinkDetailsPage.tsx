import { Metadata } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'

import SharedLinkCell from 'src/components/SharedLinkCell'

interface Props {
  id: string
}

const LinkDetailsPage = ({ id }: Props) => {
  return (
    <>
      <Metadata
        title="Link Details"
        description="Comments and details about the current link"
      />
      <Toaster />
      <SharedLinkCell id={id} />
    </>
  )
}

export default LinkDetailsPage
