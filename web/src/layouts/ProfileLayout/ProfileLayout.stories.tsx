import type { Meta, StoryObj } from '@storybook/react'

import ProfileLayout from './ProfileLayout'

const meta: Meta<typeof ProfileLayout> = {
  component: ProfileLayout,
  decorators: [
    (Story) => {
      mockCurrentUser({ id: 1, email: 'hello@lindakat.com' })
      return (
        <div className="relative">
          <Story />
        </div>
      )
    },
  ],
}

export default meta

type Story = StoryObj<typeof ProfileLayout>

export const Primary: Story = {}
