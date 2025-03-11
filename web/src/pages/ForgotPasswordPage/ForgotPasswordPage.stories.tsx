import type { Meta, StoryObj } from '@storybook/react'

import AuthLayout from 'src/layouts/AuthLayout/AuthLayout'

import ForgotPasswordPage from './ForgotPasswordPage'

const meta: Meta<typeof ForgotPasswordPage> = {
  component: ForgotPasswordPage,
  decorators: [
    (Story) => (
      <div className="relative">
        <AuthLayout>
          <Story />
        </AuthLayout>
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof ForgotPasswordPage>

export const Primary: Story = {}
