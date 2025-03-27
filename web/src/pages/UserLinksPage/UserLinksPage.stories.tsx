import type { Meta, StoryObj } from '@storybook/react'

import ProfileLayout from 'src/layouts/ProfileLayout/ProfileLayout'

import UserLinksPage from './UserLinksPage'

const meta: Meta<typeof UserLinksPage> = {
  component: UserLinksPage,
  decorators: [
    (Story) => (
      <div className="relative">
        <ProfileLayout>
          <Story />
        </ProfileLayout>
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof UserLinksPage>

export const Primary: Story = {}
