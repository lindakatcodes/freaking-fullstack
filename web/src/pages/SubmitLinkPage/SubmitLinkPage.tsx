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
    <div>
      <Metadata
        title="SubmitLink"
        description="Submit a link for the main feed"
      />
      <Toaster />
      <h1>Submit a link</h1>
      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }} error="error">
        <FormError error={error} wrapperClassName="form-error" />
        <Label name="title" className="">
          Title
        </Label>
        <TextField
          name="title"
          className=""
          errorClassName=""
          validation={{
            required: true,
          }}
        />
        <FieldError name="title" className="" />
        <Label name="url" className="">
          Url
        </Label>
        <UrlField
          name="url"
          className=""
          errorClassName=""
          validation={{
            required: true,
            pattern: {
              value: urlRegex,
              message: 'Links should be valid urls, starting with https://',
            },
          }}
        />
        <FieldError name="url" className="" />
        <Submit disabled={loading}>Submit</Submit>
      </Form>
    </div>
  )
}

export default SubmitLinkPage
