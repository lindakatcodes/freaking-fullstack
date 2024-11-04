// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import UpvoteArrow from './UpvoteArrow'

const meta: Meta<typeof UpvoteArrow> = {
  component: UpvoteArrow,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof UpvoteArrow>

export const Primary: Story = {}

export const Filled: Story = {
  args: {
    fill: true,
  },
}
