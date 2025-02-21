import type { Meta, StoryObj } from '@storybook/react'

import SharedLink from './SharedLink'

const meta: Meta<typeof SharedLink> = {
  component: SharedLink,
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

type Story = StoryObj<typeof SharedLink>

export const DefaultValues: Story = {
  args: {
    title: 'Story test link',
    username: 'test user 1',
    link: 'https://bnn.co/subpage?q=test',
  },
}

// story with points and comments
export const CustomValues: Story = {
  args: {
    title: 'Story test link that is extra long so it covers two lines',
    username: 'test user 1',
    link: 'https://bnn.co/subpage?q=test',
    points: 1234,
    commentCount: 6,
  },
}

// upvoted story
