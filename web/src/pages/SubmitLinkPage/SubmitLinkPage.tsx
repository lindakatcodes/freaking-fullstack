import { navigate, routes } from '@redwoodjs/router'
import { Metadata, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import SubmitLinkForm from 'src/components/SubmitLinkForm/SubmitLinkForm'
import { CREATE_SHARED_LINK } from 'src/mutations'

const SubmitLinkPage = () => {
  const [createSharedLink, { loading, error }] = useMutation(
    CREATE_SHARED_LINK,
    {
      onCompleted: () => {
        toast.success('Thank you for your submission!')
        navigate(routes.home())
      },
    }
  )
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    const newSharedLink = {
      ...data,
      submittedById: currentUser.id,
      points: 0,
    }
    createSharedLink({ variables: { input: newSharedLink } })
  }

  return (
    <>
      <Metadata
        title="SubmitLink"
        description="Submit a link for the main feed"
      />
      <Toaster />

      <div className="mx-auto flex w-11/12 flex-col lg:flex-row">
        <div className="@container lg:basis-7/12">
          <p className="font-serif text-[6rem] font-bold uppercase leading-none tracking-wide text-black lg:text-[20cqw]">
            submit
          </p>
          <p className="text-outline-black font-serif text-[6rem] font-bold uppercase leading-none tracking-wide text-yellow lg:text-[20cqw]">
            a link
          </p>
        </div>

        <SubmitLinkForm onSubmit={onSubmit} error={error} loading={loading} />
      </div>
    </>
  )
}

export default SubmitLinkPage
