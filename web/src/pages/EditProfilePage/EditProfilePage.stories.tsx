import type { Meta, StoryObj } from '@storybook/react'

import AuthLayout from 'src/layouts/AuthLayout/AuthLayout'

import EditProfilePage from './EditProfilePage'

const meta: Meta<typeof EditProfilePage> = {
  component: EditProfilePage,
  decorators: [
    (Story) => {
      mockCurrentUser({ id: 1, email: '' })
      return (
        <div className="relative">
          <AuthLayout>
            <Story />
          </AuthLayout>
        </div>
      )
    },
  ],
}

export default meta

type Story = StoryObj<typeof EditProfilePage>

export const Primary: Story = {}
