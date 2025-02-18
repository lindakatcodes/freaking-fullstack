import type { Meta, StoryObj } from '@storybook/react'

import SharedLink from './SharedLink'

const meta: Meta<typeof SharedLink> = {
  component: SharedLink,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof SharedLink>

export const Default: Story = {
  args: {
    title: 'Story test link',
    username: 'test user 1',
    link: 'https://bnn.co/subpage?q=test',
  },
}

// story with points and comments
export const PointsComments: Story = {
  args: {
    title: 'Story test link',
    username: 'test user 1',
    link: 'https://bnn.co/subpage?q=test',
    points: 1234,
    commentCount: 6,
  },
}

// upvoted story

// visited styles

// hover styles? see what the best practice for this is
