import type { Meta, StoryObj } from '@storybook/react'

import MainLayout from 'src/layouts/MainLayout/MainLayout'

import LinkDetailsPage from './LinkDetailsPage'

const meta: Meta<typeof LinkDetailsPage> = {
  component: LinkDetailsPage,
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

type Story = StoryObj<typeof LinkDetailsPage>

export const Primary: Story = {
  args: {
    id: '1',
  },
}
