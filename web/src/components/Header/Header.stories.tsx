import type { Meta, StoryObj } from '@storybook/react'

import Header from './Header'

const meta: Meta<typeof Header> = {
  component: Header,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="relative">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Header>

export const Primary: Story = {}
