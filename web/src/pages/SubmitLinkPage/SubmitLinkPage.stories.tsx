import type { Meta, StoryObj } from '@storybook/react'

import MainLayout from 'src/layouts/MainLayout/MainLayout'

import SubmitLinkPage from './SubmitLinkPage'

const meta: Meta<typeof SubmitLinkPage> = {
  component: SubmitLinkPage,
  decorators: [
    (Story) => (
      <MainLayout>
        <Story />
      </MainLayout>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof SubmitLinkPage>

export const Primary: Story = {}
