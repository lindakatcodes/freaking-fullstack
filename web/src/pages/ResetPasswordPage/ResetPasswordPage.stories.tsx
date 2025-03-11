import type { Meta, StoryObj } from '@storybook/react'

import AuthLayout from 'src/layouts/AuthLayout/AuthLayout'

import ResetPasswordPage from './ResetPasswordPage'

const meta: Meta<typeof ResetPasswordPage> = {
  component: ResetPasswordPage,
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

type Story = StoryObj<typeof ResetPasswordPage>

export const Primary: Story = {}
