import type { Meta, StoryObj } from '@storybook/react'

import CommentForm from './CommentForm'

const meta: Meta<typeof CommentForm> = {
  component: CommentForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="bg-yellow px-7 py-5">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof CommentForm>

export const Primary: Story = {}
