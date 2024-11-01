import type { Meta, StoryObj } from '@storybook/react'

import SharedLink from './SharedLink'

const meta: Meta<typeof SharedLink> = {
  component: SharedLink,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof SharedLink>

export const Primary: Story = {
  args: {
    title: 'My Link',
    points: 132,
    username: 'selfteachme',
    commentCount: 12,
    link: '#',
  },
}
