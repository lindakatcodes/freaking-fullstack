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

import HiddenEye from './HiddenEye'

const meta: Meta<typeof HiddenEye> = {
  component: HiddenEye,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof HiddenEye>

export const Primary: Story = {}
