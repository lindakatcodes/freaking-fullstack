import type { User } from 'types/graphql'

import {
  Form,
  Label,
  Submit,
  FieldError,
  TextField,
  UrlField,
  RWGqlError,
  FormError,
} from '@redwoodjs/forms'

interface EditUserProfileFormProps {
  initialUserData: Partial<User>
  loading: boolean
  error: RWGqlError | null
  onSubmit: (data: Partial<User>) => void
}

const EditUserProfileForm = ({
  initialUserData,
  loading = false,
  error,
  onSubmit,
}: EditUserProfileFormProps) => {
  const urlRegex =
    /http(s)?:\/\/[(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi

  return (
    <Form
      onSubmit={onSubmit}
      error="error"
      className="flex flex-col gap-6 px-2"
    >
      <FormError
        error={error}
        wrapperClassName="border-2 border-red-600 p-2 mb-4"
        titleClassName="font-bold mb-1 text-red-600"
        listClassName="text-red-600 list-disc pl-5"
      />

      <div className="flex flex-col gap-2">
        <Label name="displayName" className="text-xl font-bold text-yellow">
          Display Name
        </Label>
        <TextField
          name="displayName"
          className="h-[2.5rem] rounded-md border-2 border-white p-1"
          errorClassName="border-red-600 h-[2.5rem] rounded-md border-2 border-b-4 p-1"
          defaultValue={initialUserData.displayName}
        />
        <FieldError
          name="displayName"
          className="text-lg font-bold text-red-600"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label name="website" className="text-xl font-bold text-yellow">
          Personal Website
        </Label>
        <UrlField
          name="website"
          className="h-[2.5rem] rounded-md border-2 border-white p-1"
          errorClassName="border-red-600 h-[2.5rem] rounded-md border-2 border-b-4 p-1"
          validation={{
            pattern: {
              value: urlRegex,
              message: 'Links should be valid urls, starting with https://',
            },
          }}
          defaultValue={initialUserData.website}
        />
        <FieldError name="website" className="text-lg font-bold text-red-600" />
      </div>

      <div className="flex flex-col gap-2">
        <Label name="github" className="text-xl font-bold text-yellow">
          Github
        </Label>
        <UrlField
          name="github"
          className="h-[2.5rem] rounded-md border-2 border-white p-1"
          errorClassName="border-red-600 h-[2.5rem] rounded-md border-2 border-b-4 p-1"
          validation={{
            pattern: {
              value: urlRegex,
              message: 'Links should be valid urls, starting with https://',
            },
          }}
          defaultValue={initialUserData.github}
        />
        <FieldError name="github" className="text-lg font-bold text-red-600" />
      </div>

      <div className="flex flex-col gap-2">
        <Label name="bluesky" className="text-xl font-bold text-yellow">
          Bluesky
        </Label>
        <UrlField
          name="bluesky"
          className="h-[2.5rem] rounded-md border-2 border-white p-1"
          errorClassName="border-red-600 h-[2.5rem] rounded-md border-2 border-b-4 p-1"
          validation={{
            pattern: {
              value: urlRegex,
              message: 'Links should be valid urls, starting with https://',
            },
          }}
          defaultValue={initialUserData.bluesky}
        />
        <FieldError name="bluesky" className="text-lg font-bold text-red-600" />
      </div>

      <div className="flex flex-col gap-2">
        <Label name="linkedin" className="text-xl font-bold text-yellow">
          LinkedIn
        </Label>
        <UrlField
          name="linkedin"
          className="h-[2.5rem] rounded-md border-2 border-white p-1"
          errorClassName="border-red-600 h-[2.5rem] rounded-md border-2 border-b-4 p-1"
          validation={{
            pattern: {
              value: urlRegex,
              message: 'Links should be valid urls, starting with https://',
            },
          }}
          defaultValue={initialUserData.linkedin}
        />
        <FieldError
          name="linkedin"
          className="text-lg font-bold text-red-600"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label name="twitch" className="text-xl font-bold text-yellow">
          Twitch
        </Label>
        <UrlField
          name="twitch"
          className="h-[2.5rem] rounded-md border-2 border-white p-1"
          errorClassName="border-red-600 h-[2.5rem] rounded-md border-2 border-b-4 p-1"
          validation={{
            pattern: {
              value: urlRegex,
              message: 'Links should be valid urls, starting with https://',
            },
          }}
          defaultValue={initialUserData.twitch}
        />
        <FieldError name="twitch" className="text-lg font-bold text-red-600" />
      </div>

      <div className="flex flex-col gap-2">
        <Label name="youtube" className="text-xl font-bold text-yellow">
          Youtube
        </Label>
        <UrlField
          name="youtube"
          className="h-[2.5rem] rounded-md border-2 border-white p-1"
          errorClassName="border-red-600 h-[2.5rem] rounded-md border-2 border-b-4 p-1"
          validation={{
            pattern: {
              value: urlRegex,
              message: 'Links should be valid urls, starting with https://',
            },
          }}
          defaultValue={initialUserData.youtube}
        />
        <FieldError name="youtube" className="text-lg font-bold text-red-600" />
      </div>

      <Submit
        disabled={loading}
        className="my-6 bg-yellow py-4 text-2xl font-bold text-black disabled:bg-opacity-75"
      >
        Update
      </Submit>
    </Form>
  )
}

export default EditUserProfileForm
