import { useEffect, useRef } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
  EmailField,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import DisplayText from 'src/components/DisplayText/DisplayText'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on username box on page load
  const firstFieldRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    firstFieldRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    // this has to be set to null if they don't pick a display name, otherwise the unique constraint won't pass
    const displayName = data.displayName !== '' ? data.displayName : null
    const response = await signUp({
      username: data.email,
      password: data.password,
      displayName,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <Metadata title="Signup" />
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

      <div className="mx-auto flex w-11/12 flex-col lg:flex-row">
        <div className="lg:basis-7/12">
          <DisplayText solidText="sign" outlineText="up" />
        </div>

        <div className="mt-4 lg:mt-8 lg:basis-5/12">
          <Form
            onSubmit={onSubmit}
            error="error"
            className="flex flex-col gap-6 px-2"
          >
            <div className="flex flex-col gap-2">
              <Label
                name="displayName"
                className="text-xl font-bold text-yellow"
              >
                Display name (optional)
              </Label>
              <TextField
                name="displayName"
                className="h-[2.5rem] rounded-md border-2 border-white p-1"
                errorClassName="border-red-500 h-[2.5rem] rounded-md border-2 border-b-4 p-1"
                ref={firstFieldRef}
              />
              <FieldError
                name="displayName"
                className="text-lg font-bold text-red-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label name="email" className="text-xl font-bold text-yellow">
                Email (required)
              </Label>
              <EmailField
                name="email"
                className="h-[2.5rem] rounded-md border-2 border-white p-1"
                errorClassName="border-red-500 h-[2.5rem] rounded-md border-2 border-b-4 p-1"
                validation={{
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                }}
              />
              <FieldError
                name="email"
                className="text-lg font-bold text-red-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label name="password" className="text-xl font-bold text-yellow">
                Password (required)
              </Label>
              <PasswordField
                name="password"
                className="h-[2.5rem] rounded-md border-2 border-white p-1"
                errorClassName="border-red-500 h-[2.5rem] rounded-md border-2 border-b-4 p-1"
                autoComplete="current-password"
                validation={{
                  required: {
                    value: true,
                    message: 'Password is required',
                  },
                }}
              />
              <FieldError
                name="password"
                className="text-lg font-bold text-red-500"
              />
            </div>

            <Submit className="my-6 bg-yellow py-4 text-2xl font-bold text-black">
              Sign Up
            </Submit>
          </Form>

          <div className="pb-4 text-center text-lg text-white">
            <span>Already have an account?</span>{' '}
            <Link
              to={routes.login()}
              className="text-yellow underline decoration-yellow decoration-2"
            >
              Log in!
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignupPage
