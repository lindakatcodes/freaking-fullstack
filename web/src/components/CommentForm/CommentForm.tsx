import {
  FieldError,
  Form,
  FormError,
  Label,
  RWGqlError,
  Submit,
  TextAreaField,
  UseFormReturn,
} from '@redwoodjs/forms'

import type { CommentData } from '../SharedLinkCell'

interface CommentFormProps {
  formMethods: UseFormReturn<CommentData>
  onSubmit: (data: CommentData) => void
  loading: boolean
  error: RWGqlError | null
}

const CommentForm = ({
  formMethods,
  onSubmit,
  loading,
  error,
}: CommentFormProps) => {
  return (
    <Form
      formMethods={formMethods}
      onSubmit={onSubmit}
      error="error"
      className="flex flex-col gap-1"
    >
      <FormError
        error={error}
        wrapperClassName="border-2 border-red-700 p-2 mb-4"
        titleClassName="font-bold mb-1 text-red-700"
        listClassName="text-red-700 list-disc pl-5"
      />

      <Label name="comment" className="text-lg font-bold">
        Leave a Comment
      </Label>
      <TextAreaField
        name="comment"
        className="mb-8 rounded-md border border-black p-1"
        rows={5}
        errorClassName="border-red-700 border mb-1 p-1 rounded-md"
        validation={{
          required: true,
        }}
      />
      <FieldError name="comment" className="text-red-700" />

      <Submit
        disabled={loading}
        className="w-2/3 self-end bg-blue py-4 text-lg font-bold text-black disabled:bg-opacity-75 disabled:text-opacity-75 md:w-1/3"
      >
        Add Comment
      </Submit>
    </Form>
  )
}

export default CommentForm
