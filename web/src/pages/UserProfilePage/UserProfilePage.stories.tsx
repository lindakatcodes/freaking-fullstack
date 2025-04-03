import type { Meta, StoryObj } from '@storybook/react'

import ProfileLayout from 'src/layouts/ProfileLayout/ProfileLayout'

import UserProfilePage from './UserProfilePage'

const meta: Meta<typeof UserProfilePage> = {
  component: UserProfilePage,
  decorators: [
    (Story) => {
      mockCurrentUser({ id: 1, email: 'hello@bnn.news' })
      return (
        <div className="relative">
          <ProfileLayout>
            <Story />
          </ProfileLayout>
        </div>
      )
    },
  ],
}

export default meta

type Story = StoryObj<typeof UserProfilePage>

export const Primary: Story = {}
