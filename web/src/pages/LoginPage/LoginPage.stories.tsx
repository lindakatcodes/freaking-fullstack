import type { Meta, StoryObj } from '@storybook/react'

import AuthLayout from 'src/layouts/AuthLayout/AuthLayout'

import LoginPage from './LoginPage'

const meta: Meta<typeof LoginPage> = {
  component: LoginPage,
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

type Story = StoryObj<typeof LoginPage>

export const Primary: Story = {}
