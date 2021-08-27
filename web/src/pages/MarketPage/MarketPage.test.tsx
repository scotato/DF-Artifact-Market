import { render } from '@redwoodjs/testing/web'

import MarketPage from './MarketPage'

describe('MarketPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MarketPage />)
    }).not.toThrow()
  })
})
