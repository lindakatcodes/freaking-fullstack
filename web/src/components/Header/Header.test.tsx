import { render, screen } from '@redwoodjs/testing/web'

import Header from './Header'

describe('Header', () => {
  it('renders successfully', () => {
    const { container } = render(<Header />)
    expect(container).toBeInTheDocument()
  })

  it('displays the site title and subtitle', () => {
    render(<Header />)
    expect(screen.getByText('Brazilian Nut')).toBeInTheDocument()
    expect(
      screen.getByText('Where the best news rises to the top')
    ).toBeInTheDocument()
  })
})
