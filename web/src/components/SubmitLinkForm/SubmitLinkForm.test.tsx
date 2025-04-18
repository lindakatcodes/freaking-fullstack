import userEvent from '@testing-library/user-event'

import { render, screen, waitFor } from '@redwoodjs/testing/web'

import SubmitLinkForm from './SubmitLinkForm'

describe('SubmitLinkForm', () => {
  it('renders successfully', () => {
    expect(() => {
      const onSubmit = jest.fn()
      const loading = false
      const error = null

      render(
        <SubmitLinkForm onSubmit={onSubmit} loading={loading} error={error} />
      )
    }).not.toThrow()
  })

  it('does not submit when required fields are empty', async () => {
    const onSubmit = jest.fn()
    const loading = false
    const error = null

    render(
      <SubmitLinkForm onSubmit={onSubmit} loading={loading} error={error} />
    )

    const submitButton = screen.getByRole('button', { name: 'Submit' })

    await waitFor(() => userEvent.click(submitButton))

    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('submits when required fields are entered', async () => {
    const onSubmit = jest.fn()
    const loading = false
    const error = null
    const title = 'Hello test 1'
    const url = 'https://test.com'

    render(
      <SubmitLinkForm onSubmit={onSubmit} loading={loading} error={error} />
    )

    const titleField = screen.getByRole('textbox', { name: 'Title' })
    const urlField = screen.getByRole('textbox', { name: 'Url' })
    const submitButton = screen.getByRole('button', { name: 'Submit' })

    await waitFor(() => userEvent.type(titleField, title))
    await waitFor(() => userEvent.type(urlField, url))
    await waitFor(() => userEvent.click(submitButton))

    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(onSubmit).toHaveBeenCalled()
    expect(onSubmit).toHaveBeenCalledWith(
      { title, url },
      expect.objectContaining({
        _reactName: 'onSubmit',
        type: 'submit',
      })
    )
  })
})
