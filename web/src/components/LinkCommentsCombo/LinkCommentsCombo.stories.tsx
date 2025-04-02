import type { Meta, StoryObj } from '@storybook/react'

import LinkCommentsCombo from './LinkCommentsCombo'

const meta: Meta<typeof LinkCommentsCombo> = {
  component: LinkCommentsCombo,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="bg-black p-5">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof LinkCommentsCombo>

export const Primary: Story = {
  args: {
    commentArray: [
      {
        body: 'Come for the stellar job search tips, stay for the community roasting and pet pics!',
        createdAt: '2025-03-26T20:17:30.314Z',
        linkId: '489eaeae-2021-4516-910c-154d9b8fd901',
        link: {
          title: 'Join the Torc platform!',
        },
        id: '21',
        commentVotes: [
          {
            commentId: '200',
            userId: 1,
            id: '101',
          },
        ],
        author: {
          email: 'user1@test.co',
          displayName: null,
        },
      },
    ],
    currentUser: 2,
  },
}
