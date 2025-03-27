import { render, screen } from '@redwoodjs/testing/web'

import Navigation from './Navigation'

describe('Navigation', () => {
  it('renders successfully', () => {
    const { container } = render(<Navigation />)
    expect(container).toBeInTheDocument()
  })

  it('shows a user links to sign up or log in if not authenticated', () => {
    render(<Navigation />)
    expect(screen.getByText('Sign Up')).toBeInTheDocument()
    expect(screen.getByText('Login')).toBeInTheDocument()
  })

  it('shows a user the authenticated nav bar when logged in', () => {
    mockCurrentUser({ id: 1, email: '' })

    render(<Navigation />)
    expect(screen.getByText('My Profile')).toBeInTheDocument()
    expect(screen.getByText('Links Shared')).toBeInTheDocument()
    expect(screen.getByText('Logout')).toBeInTheDocument()
  })
})
