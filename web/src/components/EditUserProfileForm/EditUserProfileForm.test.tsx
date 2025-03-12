import userEvent from '@testing-library/user-event'
import { User } from 'types/graphql'

import { render, screen, waitFor } from '@redwoodjs/testing/web'

import EditUserProfileForm from './EditUserProfileForm'

describe('EditUserProfileForm', () => {
  it('renders successfully', () => {
    expect(() => {
      const onSubmit = jest.fn()
      const loading = false
      const error = null
      const mockUserData: Partial<User> = {
        displayName: 'Linda',
        twitch: 'https://www.twitch.tv/lindakat',
      }

      render(
        <EditUserProfileForm
          initialUserData={mockUserData}
          error={error}
          loading={loading}
          onSubmit={onSubmit}
        />
      )
    }).not.toThrow()
  })
})

it('submits the form with current and new data', async () => {
  const onSubmit = jest.fn()
  const loading = false
  const error = null
  const mockUserData: Partial<User> = {
    displayName: 'Linda',
    twitch: 'https://www.twitch.tv/lindakat',
    bluesky: '',
    linkedin: '',
    website: '',
    youtube: '',
    github: '',
  }
  const github = 'https://github.com/lindakatcodes'

  render(
    <EditUserProfileForm
      initialUserData={mockUserData}
      error={error}
      loading={loading}
      onSubmit={onSubmit}
    />
  )

  const githubField = screen.getByRole('textbox', { name: 'Github' })
  const submitButton = screen.getByRole('button', { name: 'Update' })

  await waitFor(() => userEvent.type(githubField, github))
  await waitFor(() => userEvent.click(submitButton))

  expect(onSubmit).toHaveBeenCalledTimes(1)
  expect(onSubmit).toHaveBeenCalled()
  expect(onSubmit).toHaveBeenCalledWith(
    { ...mockUserData, github },
    expect.objectContaining({
      _reactName: 'onSubmit',
      type: 'submit',
    })
  )
})

it('submits the form with updated data', async () => {
  const onSubmit = jest.fn()
  const loading = false
  const error = null
  const mockUserData: Partial<User> = {
    displayName: 'Linda',
    twitch: 'https://www.twitch.tv/lindakat',
    bluesky: '',
    linkedin: '',
    website: '',
    youtube: '',
    github: '',
  }
  const twitch = 'https://github.com/lindakatcodes'

  render(
    <EditUserProfileForm
      initialUserData={mockUserData}
      error={error}
      loading={loading}
      onSubmit={onSubmit}
    />
  )

  const twitchField = screen.getByRole('textbox', { name: 'Twitch' })
  const submitButton = screen.getByRole('button', { name: 'Update' })

  await waitFor(() => userEvent.clear(twitchField))
  await waitFor(() => userEvent.type(twitchField, twitch))
  await waitFor(() => userEvent.click(submitButton))

  expect(onSubmit).toHaveBeenCalledTimes(1)
  expect(onSubmit).toHaveBeenCalled()
  expect(onSubmit).toHaveBeenCalledWith(
    { ...mockUserData, twitch },
    expect.objectContaining({
      _reactName: 'onSubmit',
      type: 'submit',
    })
  )
})
