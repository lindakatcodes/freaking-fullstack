import type { Meta, StoryObj } from '@storybook/react'

import Comment from './Comment'

const meta: Meta<typeof Comment> = {
  component: Comment,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="bg-yellow p-5">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Comment>

export const EmptyVote: Story = {
  args: {
    comment: {
      id: '20',
      body: 'First comment',
      createdAt: '2020-01-02T12:34:56Z',
      linkId: '42',
      authorId: 1,
      author: {
        email: 'user0@test.co',
        displayName: null,
      },
      commentVotes: [],
    },
    activeUser: 1,
  },
}

export const FilledVote: Story = {
  args: {
    comment: {
      id: '20',
      body: 'First comment',
      createdAt: '2020-01-02T12:34:56Z',
      linkId: '42',
      authorId: 1,
      author: {
        email: 'user0@test.co',
        displayName: null,
      },
      commentVotes: [{ id: '10', commentId: '20', userId: 1 }],
    },
    activeUser: 1,
  },
}

export const InvertedColors: Story = {
  args: {
    comment: {
      id: '20',
      body: 'First comment',
      createdAt: '2020-01-02T12:34:56Z',
      linkId: '42',
      authorId: 1,
      author: {
        email: 'user0@test.co',
        displayName: null,
      },
      commentVotes: [{ id: '10', commentId: '20', userId: 1 }],
    },
    activeUser: 1,
    invertColors: true,
  },
  decorators: [
    (Story) => (
      <div className="bg-black p-5">
        <Story />
      </div>
    ),
  ],
}
