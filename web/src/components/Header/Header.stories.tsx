import type { Meta, StoryObj } from '@storybook/react'

import { AuthProvider } from '../../auth'

import Header from './Header'

const LoggedInDecorator = (Story) => {
  mockCurrentUser({ id: 1 })

  return (
    <AuthProvider>
      <Story />
    </AuthProvider>
  )
}

const meta: Meta<typeof Header> = {
  component: Header,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Header>

export const LoggedIn: Story = {
  decorators: [LoggedInDecorator],
}

export const LoggedOut: Story = {}
