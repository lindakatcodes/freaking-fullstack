import { navigate, routes } from '@redwoodjs/router'
import { Metadata, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import SubmitLinkForm from 'src/components/SubmitLinkForm/SubmitLinkForm'

const CREATE_SHARED_LINK = gql`
  mutation CreateSharedLinkMutation($input: CreateSharedLinkInput!) {
    createSharedLink(input: $input) {
      id
    }
  }
`

const SubmitLinkPage = () => {
  const [create, { loading, error }] = useMutation(CREATE_SHARED_LINK, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
      navigate(routes.home())
    },
  })
  const { currentUser } = useAuth()

  const onSubmit = (data) => {
    const newSharedLink = {
      ...data,
      submittedById: currentUser.id,
    }
    create({ variables: { input: newSharedLink } })
  }

  return (
    <>
      <Metadata
        title="SubmitLink"
        description="Submit a link for the main feed"
      />
      <Toaster />

      <div className="mx-auto flex w-11/12 max-w-6xl">
        <div className="basis-7/12">
          <div className="flex w-full flex-wrap gap-2 leading-none">
            <p className="font-serif text-[min(20vw,14rem)] font-bold uppercase tracking-wide text-black">
              submit
            </p>
            <p className="text-outline-black font-serif text-[min(20vw,14rem)] font-bold uppercase tracking-wide text-yellow">
              a link
            </p>
          </div>
        </div>

        <SubmitLinkForm onSubmit={onSubmit} error={error} loading={loading} />
      </div>
    </>
  )
}

export default SubmitLinkPage
