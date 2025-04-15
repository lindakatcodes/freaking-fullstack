import { useEffect, useRef } from 'react'

import { Form, Label, Submit, FieldError, EmailField } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import DisplayText from 'src/components/DisplayText/DisplayText'

const ForgotPasswordPage = () => {
  const { isAuthenticated, forgotPassword } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const emailRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    emailRef?.current?.focus()
  }, [])

  const onSubmit = async (data: { email: string }) => {
    const response = await forgotPassword(data.email)

    if (response.error) {
      toast.error(response.error)
    } else {
      toast.success(
        'Normally a link to reset your password would be sent to ' +
          response.user.email +
          '. However, this is a test project and there is no email service. Instead, you will be redirected to the reset password page to pick a new one!'
      )
      await new Promise((resolve) => setTimeout(resolve, 6500))
      navigate(routes.resetPassword({ resetToken: response.resetToken }))
    }
  }
  return (
    <>
      <Metadata title="Forgot Password" />
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

      <div className="mx-auto flex w-11/12 flex-col lg:flex-row">
        <div className="lg:basis-7/12">
          <DisplayText solidText="forgot" outlineText="password" />
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

            <Submit className="my-6 bg-yellow py-4 text-2xl font-bold text-black">
              Email me a reset
            </Submit>
          </Form>
        </div>
      </div>
    </>
  )
}

export default ForgotPasswordPage
