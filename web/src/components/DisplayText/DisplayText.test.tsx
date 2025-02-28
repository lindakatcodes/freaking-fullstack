import { render, screen } from '@redwoodjs/testing/web'

import DisplayText from './DisplayText'

describe('DisplayText', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <DisplayText
          solidText="submit"
          solidTextColor="black"
          outlineText="a link"
          outlineColor="black"
        />
      )
    }).not.toThrow()
  })

  it('shows the correct outline color', () => {
    render(
      <DisplayText
        solidText="forgot"
        solidTextColor="white"
        outlineText="password"
        outlineColor="blue"
      />
    )
    expect(screen.getByText('password')).toHaveClass('text-stroke-color-blue')
    expect(screen.getByText('forgot')).toHaveClass('text-white')
  })
})
