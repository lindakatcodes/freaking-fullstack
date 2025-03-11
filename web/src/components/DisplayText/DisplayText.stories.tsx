import type { Meta, StoryObj } from '@storybook/react'

import DisplayText from './DisplayText'

const meta: Meta<typeof DisplayText> = {
  component: DisplayText,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="bg-black p-3">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof DisplayText>

export const Primary: Story = {
  args: {
    solidText: 'hello',
    outlineText: 'world',
  },
}
