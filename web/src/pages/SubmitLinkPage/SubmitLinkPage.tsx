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

      <div className="mx-auto flex w-11/12">
        <div className="@container basis-7/12">
          <p className="font-serif text-[20cqw] font-bold uppercase leading-none tracking-wide text-black">
            submit
          </p>
          <p className="text-outline-black font-serif text-[20cqw] font-bold uppercase leading-none tracking-wide text-yellow">
            a link
          </p>
        </div>

        <SubmitLinkForm onSubmit={onSubmit} error={error} loading={loading} />
      </div>
    </>
  )
}

export default SubmitLinkPage
