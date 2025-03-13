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
      id: '20',
      body: 'First comment',
      createdAt: '2020-01-02T12:34:56Z',
      linkId: '42',
      author: {
        email: 'user0@test.co',
        displayName: null,
      },
    },
  },
}
