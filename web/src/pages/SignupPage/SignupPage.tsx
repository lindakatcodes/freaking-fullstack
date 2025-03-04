import { useEffect, useRef } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
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
  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await signUp({
      username: data.username,
      password: data.password,
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

      <div className="mx-auto flex w-10/12">
        <div className="basis-7/12">
          <DisplayText solidText="sign" outlineText="up" />
        </div>
        <div className="mt-8 basis-5/12">
          <Form
            onSubmit={onSubmit}
            config={{ mode: 'onBlur' }}
            error="error"
            className="flex flex-col gap-6 px-2"
          >
            <div className="flex flex-col gap-2">
              <Label name="username" className="text-xl font-bold text-yellow">
                Username
              </Label>
              <TextField
                name="username"
                className="h-[2.5rem] rounded-md border-2 border-white p-1"
                errorClassName="border-red-600 h-[2.5rem] rounded-md border-2 border-b-4 p-1"
                ref={usernameRef}
                validation={{
                  required: {
                    value: true,
                    message: 'Username is required',
                  },
                }}
              />
              <FieldError
                name="username"
                className="text-lg font-bold text-red-600"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label name="password" className="text-xl font-bold text-yellow">
                Password
              </Label>
              <PasswordField
                name="password"
                className="h-[2.5rem] rounded-md border-2 border-white p-1"
                errorClassName="border-red-600 h-[2.5rem] rounded-md border-2 border-b-4 p-1"
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
                className="text-lg font-bold text-red-600"
              />
            </div>

            <Submit className="my-6 bg-yellow py-4 text-2xl font-bold text-black">
              Sign Up
            </Submit>
          </Form>

          <div className="text-center text-lg text-white">
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
