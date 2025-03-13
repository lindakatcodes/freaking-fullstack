import type { Meta, StoryObj } from '@storybook/react'

import Comment from './Comment'

const meta: Meta<typeof Comment> = {
  component: Comment,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="bg-yellow">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Comment>

export const Primary: Story = {
  args: {
    comment: {
      name: 'LindaKat',
      body: 'This is the first comment!',
      createdAt: '2020-01-01T12:34:56Z',
    },
  },
}
