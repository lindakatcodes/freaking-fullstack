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
// See https://storybook.js.org/docs/7/writing-stories/args

import type { Meta, StoryObj } from '@storybook/react'

import DisplayText from './DisplayText'

const meta: Meta<typeof DisplayText> = {
  component: DisplayText,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof DisplayText>

export const Primary: Story = {
  args: {
    solidText: 'submit',
    outlineText: 'a link',
    outlineColor: 'blue',
  },
}
