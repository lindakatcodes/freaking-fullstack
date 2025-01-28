import type { Meta, StoryObj } from '@storybook/react'

import { AuthProvider } from '../../auth'

import Navigation from './Navigation'

const LoggedInDecorator = (Story) => {
  mockCurrentUser({ id: 1 })

  return (
    <AuthProvider>
      <Story />
    </AuthProvider>
  )
}

const meta: Meta<typeof Navigation> = {
  component: Navigation,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Navigation>

export const AuthenticatedNav: Story = {
  decorators: [LoggedInDecorator],
}

export const UnauthenticatedNav: Story = {}
