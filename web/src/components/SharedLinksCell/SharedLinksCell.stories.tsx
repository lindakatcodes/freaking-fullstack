import type { Meta, StoryObj } from '@storybook/react'

import { Loading, Empty, Failure, Success } from './SharedLinksCell'
import { standard } from './SharedLinksCell.mock'

const meta: Meta = {
  title: 'Cells/SharedLinksCell',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="bg-yellow">
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
    mockCurrentUser({ id: 1, email: '' })
    return Success ? <Success {...standard()} {...args} /> : <></>
  },
}
