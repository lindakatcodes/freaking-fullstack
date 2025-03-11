import type { Meta, StoryObj } from '@storybook/react'

import AuthLayout from 'src/layouts/AuthLayout/AuthLayout'

import SignupPage from './SignupPage'

const meta: Meta<typeof SignupPage> = {
  component: SignupPage,
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

type Story = StoryObj<typeof SignupPage>

export const Primary: Story = {}
