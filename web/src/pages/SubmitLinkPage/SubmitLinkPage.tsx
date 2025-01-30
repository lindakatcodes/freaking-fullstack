import { FieldError, Form, Label, Submit, UrlField } from '@redwoodjs/forms'
import { Metadata } from '@redwoodjs/web'

const SubmitLinkPage = () => {
  // copied from https://regexr.com/39nr7 then modified so http is always required
  const urlRegex =
    /http(s)?:\/\/[(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <main className="h-full w-full bg-yellow">
      <Metadata
        title="SubmitLink"
        description="Submit a link for the main feed"
      />
      <h1>Submit a link</h1>
      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
        <Label name="link" className="">
          Link
        </Label>
        <UrlField
          name="link"
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
        <FieldError name="link" className="" />
        <Submit>Submit</Submit>
      </Form>
    </main>
  )
}

export default SubmitLinkPage
