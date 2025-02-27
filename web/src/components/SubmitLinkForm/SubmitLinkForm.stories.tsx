import type { Meta, StoryObj } from '@storybook/react'

import SubmitLinkForm from './SubmitLinkForm'

const meta: Meta<typeof SubmitLinkForm> = {
  component: SubmitLinkForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="bg-yellow px-7 py-5">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof SubmitLinkForm>

export const InitialState: Story = {
  args: {
    loading: false,
    error: null,
  },
}

export const FormError: Story = {
  args: {
    loading: false,
    error: {
      message: 'Links should be valid urls, starting with https://',
      graphQLErrors: [
        {
          message: 'Links should be valid urls, starting with https://',
          extensions: {
            code: 'BAD_USER_INPUT',
            properties: {
              messages: {
                url: ['Links should be valid urls, starting with https://'],
              },
            },
          },
        },
      ],
      networkError: null,
    },
  },
}
