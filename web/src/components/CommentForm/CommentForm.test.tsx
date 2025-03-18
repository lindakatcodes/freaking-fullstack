import { render } from '@redwoodjs/testing/web'

import CommentForm from './CommentForm'

describe('CommentForm', () => {
  it('renders successfully', () => {
    expect(() => {
      const onSubmit = jest.fn()
      const loading = false
      const error = null

      render(
        <CommentForm onSubmit={onSubmit} loading={loading} error={error} />
      )
    }).not.toThrow()
  })
})
