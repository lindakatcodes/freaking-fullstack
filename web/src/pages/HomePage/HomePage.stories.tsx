import type { Meta, StoryObj } from '@storybook/react'

import MainLayout from 'src/layouts/MainLayout/MainLayout'

import FeedPage from './HomePage'

const meta: Meta<typeof FeedPage> = {
  component: FeedPage,
  decorators: [
    (Story) => (
      <MainLayout>
        <Story />
      </MainLayout>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof FeedPage>

export const Primary: Story = {}
