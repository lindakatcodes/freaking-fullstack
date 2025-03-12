import type { Meta, StoryObj } from '@storybook/react'

import EditUserProfileForm from './EditUserProfileForm'

const meta: Meta<typeof EditUserProfileForm> = {
  component: EditUserProfileForm,
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

type Story = StoryObj<typeof EditUserProfileForm>

export const WithInitialData: Story = {
  args: {
    loading: false,
    error: null,
    initialUserData: {
      displayName: 'Gizmo',
      linkedin: 'https://linkedin.com/goodboygizmo',
    },
  },
}

export const NoInitialData: Story = {
  args: {
    loading: false,
    error: null,
    initialUserData: {},
  },
}

export const FormError: Story = {
  args: {
    initialUserData: {
      website: 'lindakat',
    },
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
