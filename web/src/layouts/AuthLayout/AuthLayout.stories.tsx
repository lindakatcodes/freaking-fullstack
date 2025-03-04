import type { Meta, StoryObj } from '@storybook/react'

import AuthLayout from './AuthLayout'

const meta: Meta<typeof AuthLayout> = {
  component: AuthLayout,
  decorators: [
    (Story) => (
      <div className="relative">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof AuthLayout>

export const Primary: Story = {}
