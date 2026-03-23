import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
 
describe('Page', () => {
  it('renders a Link', () => {
    render(<Page />)
 
    const link = screen.getByRole('link')
 
    expect(link).toBeInTheDocument()
  })
})