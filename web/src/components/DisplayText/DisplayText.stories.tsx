import type { Meta, StoryObj } from '@storybook/react'

import DisplayText from './DisplayText'

const meta: Meta<typeof DisplayText> = {
  component: DisplayText,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof DisplayText>

export const BlackOutline: Story = {
  args: {
    solidText: 'submit',
    outlineText: 'a link',
    solidTextColor: 'black',
    outlineColor: 'black',
  },
  decorators: [
    (Story) => (
      <div className="bg-yellow  p-3">
        <Story />
      </div>
    ),
  ],
}

export const BlueOutline: Story = {
  args: {
    solidText: 'forgot',
    outlineText: 'password',
    solidTextColor: 'white',
    outlineColor: 'blue',
  },
  decorators: [
    (Story) => (
      <div className="bg-black p-3">
        <Story />
      </div>
    ),
  ],
}
