import type { Meta, StoryObj } from '@storybook/react'

import ProfileLayout from 'src/layouts/ProfileLayout/ProfileLayout'

import UserCommentsPage from './UserCommentsPage'

const meta: Meta<typeof UserCommentsPage> = {
  component: UserCommentsPage,
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

type Story = StoryObj<typeof UserCommentsPage>

export const Primary: Story = {}
