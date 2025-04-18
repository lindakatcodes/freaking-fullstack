import type { Meta, StoryObj } from '@storybook/react'

import { Success } from './UserEmailCell'
import { standard } from './UserEmailCell.mock'

const meta: Meta = {
  title: 'Cells/UserEmailCell',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="bg-black">
        <Story />
      </div>
    ),
  ],
}

export default meta

export const success: StoryObj<typeof Success> = {
  render: (args) => {
    return Success ? <Success {...standard()} {...args} /> : <></>
  },
}
