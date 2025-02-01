import {
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextField,
  UrlField,
} from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { Metadata, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import DisplayText from 'src/components/DisplayText/DisplayText'

const CREATE_SHARED_LINK = gql`
  mutation CreateSharedLinkMutation($input: CreateSharedLinkInput!) {
    createSharedLink(input: $input) {
      id
    }
  }
`

const SubmitLinkPage = () => {
  // copied from https://regexr.com/39nr7 then modified so http is always required, since that's what the html spec requires
  const urlRegex =
    /http(s)?:\/\/[(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi

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
          <DisplayText
            solidText="submit"
            outlineText="a link"
            outlineColor="black"
          />
        </div>

        <Form
          onSubmit={onSubmit}
          config={{ mode: 'onBlur' }}
          error="error"
          className="mt-10 flex basis-5/12 flex-col gap-1"
        >
          <FormError
            error={error}
            wrapperClassName="border-2 border-red-600 p-2 mb-4"
            titleClassName="font-bold mb-1 text-red-600"
            listClassName="text-red-600 list-disc pl-5"
          />

          <Label name="title" className="text-lg font-bold">
            Title
          </Label>
          <TextField
            name="title"
            className="mb-8 p-1"
            errorClassName="border-red-600 border-2 mb-1 p-1"
            validation={{
              required: true,
            }}
          />
          <FieldError name="title" className="text-red-600" />

          <Label name="url" className="text-lg font-bold">
            Url
          </Label>
          <UrlField
            name="url"
            className="mb-9 p-1"
            errorClassName="border-red-600 border-2 mb-1 p-1"
            validation={{
              required: true,
              pattern: {
                value: urlRegex,
                message: 'Links should be valid urls, starting with https://',
              },
            }}
          />
          <FieldError name="url" className="mb-4 text-red-600" />

          <Submit
            disabled={loading}
            className="bg-black py-4 text-lg font-bold text-yellow disabled:bg-opacity-75"
          >
            Submit
          </Submit>
        </Form>
      </div>
    </>
  )
}

export default SubmitLinkPage
