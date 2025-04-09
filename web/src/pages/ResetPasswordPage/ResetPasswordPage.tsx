import { useEffect, useRef, useState } from 'react'

import {
  Form,
  Label,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import DisplayText from 'src/components/DisplayText/DisplayText'

const ResetPasswordPage = ({ resetToken }: { resetToken: string }) => {
  const { isAuthenticated, reauthenticate, validateResetToken, resetPassword } =
    useAuth()
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  useEffect(() => {
    const validateToken = async () => {
      const response = await validateResetToken(resetToken)
      if (response.error) {
        setEnabled(false)
        toast.error(response.error)
      } else {
        setEnabled(true)
      }
    }
    validateToken()
  }, [resetToken, validateResetToken])

  const passwordRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    passwordRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await resetPassword({
      resetToken,
      password: data.password,
    })

    if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Password changed!')
      await reauthenticate()
      navigate(routes.login())
    }
  }

  return (
    <>
      <Metadata title="Reset Password" />
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

      <div className="mx-auto flex w-11/12 flex-col lg:flex-row">
        <div className="lg:basis-7/12">
          <DisplayText solidText="reset" outlineText="password" />
        </div>

        <div className="mt-4 lg:mt-8 lg:basis-5/12">
          <Form onSubmit={onSubmit} className="flex flex-col gap-6 px-2">
            <div className="flex flex-col gap-2">
              <Label name="password" className="text-xl font-bold text-yellow">
                New Password
              </Label>
              <PasswordField
                name="password"
                className="h-[2.5rem] rounded-md border-2 border-white p-1"
                errorClassName="border-red-600 h-[2.5rem] rounded-md border-2 border-b-4 p-1"
                autoComplete="new-password"
                disabled={!enabled}
                ref={passwordRef}
                validation={{
                  required: {
                    value: true,
                    message: 'New Password is required',
                  },
                }}
              />
              <FieldError
                name="password"
                className="text-lg font-bold text-red-600"
              />
            </div>

            <Submit
              className="my-6 bg-yellow py-4 text-2xl font-bold text-black"
              disabled={!enabled}
            >
              Reset password
            </Submit>
          </Form>
        </div>
      </div>
    </>
  )
}

export default ResetPasswordPage
