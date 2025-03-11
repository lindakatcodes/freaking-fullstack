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

import EditUserProfileForm from './EditUserProfileForm'

const meta: Meta<typeof EditUserProfileForm> = {
  component: EditUserProfileForm,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof EditUserProfileForm>

export const Primary: Story = {}
