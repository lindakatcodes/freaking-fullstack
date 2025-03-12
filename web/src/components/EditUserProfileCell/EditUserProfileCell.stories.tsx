import type { Meta, StoryObj } from '@storybook/react'

import { Loading, Success } from './EditUserProfileCell'
import { standard } from './EditUserProfileCell.mock'

const meta: Meta = {
  title: 'Cells/EditUserProfileCell',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="bg-black px-7 py-5">
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
