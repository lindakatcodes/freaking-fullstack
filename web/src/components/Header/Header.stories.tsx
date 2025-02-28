import type { Meta, StoryObj } from '@storybook/react'

import { AuthProvider } from '../../auth'

import Header from './Header'

const meta: Meta<typeof Header> = {
  component: Header,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="relative">
        <Story />
      </div>
    ),
  ],
}

export default meta

const LoggedInDecorator = (Story) => {
  mockCurrentUser({ id: 1 })
  return (
    <AuthProvider>
      <Story />
    </AuthProvider>
  )
}

type Story = StoryObj<typeof Header>

export const LoggedIn: Story = {
  decorators: [LoggedInDecorator],
}

export const LoggedOut: Story = {}
