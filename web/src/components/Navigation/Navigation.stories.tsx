import type { Meta, StoryObj } from '@storybook/react'

import { AuthProvider } from '../../auth'

import Navigation from './Navigation'

const meta: Meta<typeof Navigation> = {
  component: Navigation,
  tags: ['autodocs'],
  parameters: {
    docs: {
      story: {
        height: '50px',
      },
    },
  },
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
  mockCurrentUser({ id: 1, email: '' })
  return (
    <AuthProvider>
      <Story />
    </AuthProvider>
  )
}

type Story = StoryObj<typeof Navigation>

export const AuthenticatedNav: Story = {
  decorators: [LoggedInDecorator],
}

export const UnauthenticatedNav: Story = {}
