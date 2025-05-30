import { useEffect, useRef } from 'react'

import {
  Form,
  Label,
  PasswordField,
  Submit,
  FieldError,
  EmailField,
} from '@redwoodjs/forms'
import { Link, navigate, routes, useLocation } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import DisplayText from 'src/components/DisplayText/DisplayText'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()
  const { search } = useLocation()

  useEffect(() => {
    const hasRedirect = search && search.includes('redirectTo')
    if (isAuthenticated) {
      if (hasRedirect) {
        const redirectPath = search.split('?redirectTo=')[1]
        navigate(redirectPath)
      } else {
        navigate(routes.home())
      }
    }
  }, [isAuthenticated, search])

  const emailRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await logIn({
      username: data.email,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <Metadata title="Login" />
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

      <div className="mx-auto flex w-11/12 flex-col lg:flex-row">
        <div className="lg:basis-7/12">
          <DisplayText solidText="login" outlineText="login" />
        </div>

        <div className="mt-4 lg:mt-8 lg:basis-5/12">
          <Form onSubmit={onSubmit} className="flex flex-col gap-6 px-2">
            <div className="flex flex-col gap-2">
              <Label name="email" className="text-xl font-bold text-yellow">
                Email
              </Label>
              <EmailField
                name="email"
                className="h-[2.5rem] rounded-md border-2 border-white p-1"
                errorClassName="border-red-500 h-[2.5rem] rounded-md border-2 border-b-4 p-1"
                ref={emailRef}
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
                Password
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
              <Link
                to={routes.forgotPassword()}
                className="text-right text-yellow underline decoration-yellow decoration-2"
              >
                Forgot Password?
              </Link>
            </div>

            <Submit className="my-6 bg-yellow py-4 text-2xl font-bold text-black">
              Login
            </Submit>
          </Form>

          <div className="pb-4 text-center text-lg text-white">
            <span>Don&apos;t have an account?</span>{' '}
            <Link
              to={routes.signup()}
              className="text-yellow underline decoration-yellow decoration-2"
            >
              Sign up!
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
