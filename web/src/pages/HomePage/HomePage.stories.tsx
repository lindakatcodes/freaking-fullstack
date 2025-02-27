import type { Meta, StoryObj } from '@storybook/react'

import MainLayout from 'src/layouts/MainLayout/MainLayout'

import FeedPage from './HomePage'

const meta: Meta<typeof FeedPage> = {
  component: FeedPage,
  decorators: [
    (Story) => (
      <div className="relative">
        <MainLayout>
          <Story />
        </MainLayout>
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof FeedPage>

export const Primary: Story = {}
