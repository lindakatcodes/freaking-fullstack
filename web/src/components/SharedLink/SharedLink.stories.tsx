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
    handleLinkDeletion: () => {},
  },
}

// story with points and comments
export const CustomValues: Story = {
  args: {
    title: 'Story test link that is extra long so it covers multiple lines',
    displayName: 'LindaKat',
    link: 'https://bnn.co/subpage?q=test',
    points: 1234,
    commentCount: 6,
    handleUpvoteClick: () => {},
    activeUser: 1,
    linkVotes: [],
    linkId: '1',
    handleLinkDeletion: () => {},
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
    handleLinkDeletion: () => {},
  },
}

export const LinkWithDelete: Story = {
  args: {
    title: 'The current user submitted this one',
    displayName: 'LindaKat',
    link: 'https://bnn.co/subpage?q=test',
    points: 1234,
    commentCount: 6,
    handleUpvoteClick: () => {},
    activeUser: 1,
    linkVotes: [{ id: '100', linkId: '1', userId: 1 }],
    linkId: '1',
    handleLinkDeletion: () => {},
    showDeleteButton: true,
  },
}

export const InvertedColors: Story = {
  args: {
    title: 'This is how it looks on user pages',
    displayName: 'LindaKat',
    link: 'https://bnn.co/subpage?q=test',
    points: 123,
    commentCount: 1,
    handleUpvoteClick: () => {},
    activeUser: 1,
    linkVotes: [],
    linkId: '1',
    handleLinkDeletion: () => {},
    invertColors: true,
  },
  decorators: [
    (Story) => (
      <div className="bg-black p-6">
        <Story />
      </div>
    ),
  ],
}
