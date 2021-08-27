import { MetaTags } from '@redwoodjs/web'
import MarketCell from 'src/components/MarketCell'

const MarketPage = () => {
  return (
    <>
      <MetaTags
        title="Market"
        // description="Market description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <MarketCell />
    </>
  )
}

export default MarketPage
