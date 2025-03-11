// import { useEffect, useRef } from 'react'

import {
  Form,
  Label,
  PasswordField,
  Submit,
  FieldError,
  EmailField,
  TextField,
  UrlField,
} from '@redwoodjs/forms'
// import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

// import { useAuth } from 'src/auth'
import DisplayText from 'src/components/DisplayText/DisplayText'

const EditProfilePage = () => {
  const urlRegex =
    /http(s)?:\/\/[(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi

  const onSubmit = async (data: Record<string, string>) => {
    // see if we have any data - if not, early return
    console.log(data)

    // then get the fields we do have and make a call to update the user info in our db with the new data

    // once successful, return a toast to say it was good
  }

  return (
    <>
      <Metadata title="Edit Profile" />
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

      <div className="mx-auto flex w-10/12">
        <div className="basis-7/12">
          <DisplayText solidText="edit my" outlineText="profile" />
        </div>

        <div className="mt-8 basis-5/12">
          <Form onSubmit={onSubmit} className="flex flex-col gap-6 px-2">
            <div className="flex flex-col gap-2">
              <Label
                name="displayName"
                className="text-xl font-bold text-yellow"
              >
                Display Name
              </Label>
              <TextField
                name="displayName"
                className="h-[2.5rem] rounded-md border-2 border-white p-1"
                errorClassName="border-red-600 h-[2.5rem] rounded-md border-2 border-b-4 p-1"
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
                    message:
                      'Links should be valid urls, starting with https://',
                  },
                }}
              />
              <FieldError
                name="website"
                className="text-lg font-bold text-red-600"
              />
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
                    message:
                      'Links should be valid urls, starting with https://',
                  },
                }}
              />
              <FieldError
                name="github"
                className="text-lg font-bold text-red-600"
              />
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
                    message:
                      'Links should be valid urls, starting with https://',
                  },
                }}
              />
              <FieldError
                name="bluesky"
                className="text-lg font-bold text-red-600"
              />
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
                    message:
                      'Links should be valid urls, starting with https://',
                  },
                }}
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
                    message:
                      'Links should be valid urls, starting with https://',
                  },
                }}
              />
              <FieldError
                name="twitch"
                className="text-lg font-bold text-red-600"
              />
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
                    message:
                      'Links should be valid urls, starting with https://',
                  },
                }}
              />
              <FieldError
                name="youtube"
                className="text-lg font-bold text-red-600"
              />
            </div>

            <Submit className="my-6 bg-yellow py-4 text-2xl font-bold text-black">
              Update
            </Submit>
          </Form>
        </div>
      </div>
    </>
  )
}

export default EditProfilePage
