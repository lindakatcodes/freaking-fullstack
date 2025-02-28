import type { Meta, StoryObj } from '@storybook/react'

import MainLayout from 'src/layouts/MainLayout/MainLayout'

import SubmitLinkPage from './SubmitLinkPage'

const meta: Meta<typeof SubmitLinkPage> = {
  component: SubmitLinkPage,
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

type Story = StoryObj<typeof SubmitLinkPage>

export const Primary: Story = {}
