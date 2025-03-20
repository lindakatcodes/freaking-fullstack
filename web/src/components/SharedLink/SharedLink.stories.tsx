import type { Meta, StoryObj } from '@storybook/react'

import SharedLink from './SharedLink'

const meta: Meta<typeof SharedLink> = {
  component: SharedLink,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="bg-yellow p-6">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof SharedLink>

export const DefaultValues: Story = {
  args: {
    title: 'Story test link',
    displayName: 'user1',
    link: 'https://bnn.co/subpage?q=test',
    handleUpvoteClick: () => {},
    activeUser: 1,
    linkVotes: [],
    linkId: '1',
  },
}

// story with points and comments
export const CustomValues: Story = {
  args: {
    title: 'Story test link that is extra long so it covers two lines',
    displayName: 'LindaKat',
    link: 'https://bnn.co/subpage?q=test',
    points: 1234,
    commentCount: 6,
    handleUpvoteClick: () => {},
    activeUser: 1,
    linkVotes: [],
    linkId: '1',
  },
}

// upvoted story
export const UpvotedLink: Story = {
  args: {
    title: 'So good it got upvoted',
    displayName: 'LindaKat',
    link: 'https://bnn.co/subpage?q=test',
    points: 1234,
    commentCount: 6,
    handleUpvoteClick: () => {},
    activeUser: 1,
    linkVotes: [{ id: '100', linkId: '1', userId: 1 }],
    linkId: '1',
  },
}
