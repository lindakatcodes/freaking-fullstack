import {
  FieldError,
  Form,
  FormError,
  Label,
  RWGqlError,
  Submit,
  TextAreaField,
} from '@redwoodjs/forms'

interface CommentFormProps {
  onSubmit: (data: CommentFormData) => void
  loading: boolean
  error: RWGqlError | null
}

interface CommentFormData {
  comment: string
}

const CommentForm = ({ onSubmit, loading, error }: CommentFormProps) => {
  return (
    <Form onSubmit={onSubmit} error="error" className="flex flex-col gap-1">
      <FormError
        error={error}
        wrapperClassName="border-2 border-red-600 p-2 mb-4"
        titleClassName="font-bold mb-1 text-red-600"
        listClassName="text-red-600 list-disc pl-5"
      />

      <Label name="comment" className="text-lg font-bold">
        Leave a Comment
      </Label>
      <TextAreaField
        name="comment"
        className="mb-8 rounded-md border border-black p-1"
        rows={5}
        errorClassName="border-red-600 border mb-1 p-1 rounded-md"
        validation={{
          required: true,
        }}
      />
      <FieldError name="comment" className="text-red-600" />

      <Submit
        disabled={loading}
        className="w-1/3 self-end bg-blue py-4 text-lg font-bold text-black disabled:bg-opacity-75 disabled:text-opacity-75"
      >
        Add Comment
      </Submit>
    </Form>
  )
}

export default CommentForm
