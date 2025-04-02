import type { Meta, StoryObj } from '@storybook/react'

import ProfileNavigation from './ProfileNavigation'

const meta: Meta<typeof ProfileNavigation> = {
  component: ProfileNavigation,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="relative bg-black p-5">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof ProfileNavigation>

export const Primary: Story = {}
