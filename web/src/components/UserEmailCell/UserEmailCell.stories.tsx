import type { Meta, StoryObj } from '@storybook/react'

import { Loading, Success } from './UserEmailCell'
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

export const loading: StoryObj<typeof Loading> = {
  render: () => {
    return Loading ? <Loading /> : <></>
  },
}

export const success: StoryObj<typeof Success> = {
  render: (args) => {
    return Success ? <Success {...standard()} {...args} /> : <></>
  },
}
