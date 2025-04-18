import type { Meta, StoryObj } from '@storybook/react'

import MainLayout from './MainLayout'

const meta: Meta<typeof MainLayout> = {
  component: MainLayout,
  decorators: [
    (Story) => (
      <div className="relative">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof MainLayout>

export const Primary: Story = {}
