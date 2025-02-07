import {
  FieldError,
  Form,
  FormError,
  Label,
  RWGqlError,
  Submit,
  TextField,
  UrlField,
} from '@redwoodjs/forms'

interface SubmitLinkFormProps {
  onSubmit: (data: SubmitLinkFormData) => void
  loading: boolean
  error: RWGqlError | null
}

interface SubmitLinkFormData {
  title: string
  url: string
}

const SubmitLinkForm = ({ onSubmit, loading, error }: SubmitLinkFormProps) => {
  // copied from https://regexr.com/39nr7 then modified so http is always required, since that's what the html spec requires
  const urlRegex =
    /http(s)?:\/\/[(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi

  return (
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
        className="mb-8 rounded-md border border-black p-1"
        errorClassName="border-red-600 border mb-1 p-1 rounded-md"
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
        className="mb-9 rounded-md border border-black p-1"
        errorClassName="border-red-600 border mb-1 p-1 rounded-md"
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
  )
}

export default SubmitLinkForm
