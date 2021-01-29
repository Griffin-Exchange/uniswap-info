import React, { useEffect } from 'react'
import 'feather-icons'

import { PageZeroWrapper } from '../components'
// import { useMedia } from 'react-use'

function IframePage(props) {
  const menuIframe = [
    "https://griffin.exchange/giga/#/farms",
    "https://griffin.exchange/app/#/pool",
    "https://griffin.exchange/giga/#/staking",
    "https://griffin.exchange/app/#/swap",
    "https://snapshot.page/#/griffin",
    "https://bridge.xdaichain.com/"
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // const below600 = useMedia('(max-width: 800px)')

  return (
    <PageZeroWrapper>
      <div
        dangerouslySetInnerHTML={{ __html: `<iframe src="${menuIframe[props.id]}" style="border:none;min-height:100vh" width="100%" height="100vh" allowfullscreen />` }}
      />
    </PageZeroWrapper>
  )
}

export default IframePage
