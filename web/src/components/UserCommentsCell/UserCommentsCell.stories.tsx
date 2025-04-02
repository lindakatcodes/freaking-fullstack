import type { Meta, StoryObj } from '@storybook/react'

import { Loading, Empty, Failure, Success } from './UserCommentsCell'
import { standard } from './UserCommentsCell.mock'

const meta: Meta = {
  title: 'Cells/UserCommentsCell',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="bg-black p-5">
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

export const empty: StoryObj<typeof Empty> = {
  render: () => {
    return Empty ? <Empty /> : <></>
  },
}

export const failure: StoryObj<typeof Failure> = {
  render: (args) => {
    return Failure ? <Failure error={new Error('Oh no')} {...args} /> : <></>
  },
}

export const success: StoryObj<typeof Success> = {
  render: (args) => {
    mockCurrentUser({ id: 1, email: 'hello@bnn.news' })
    return Success ? <Success {...standard()} {...args} /> : <></>
  },
}
