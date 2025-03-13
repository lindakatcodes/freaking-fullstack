import { Metadata } from '@redwoodjs/web'

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

      <SharedLinkCell id={id} />
    </>
  )
}

export default LinkDetailsPage
