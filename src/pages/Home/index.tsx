import React from 'react'
import { PageWrapper } from '../../styles/globalStyles'
import { IntroducingBox } from './IntroducingBox'
import { RememberBox } from './RememberBox'
import { ProductExplain } from './ProductExplain'
import { SMIExplain } from './SMIPlayExplain'

const Home: React.FC = () => {
  return (
    <PageWrapper>
      <IntroducingBox />
      <RememberBox />
      <ProductExplain />
      <SMIExplain />
    </PageWrapper>
  )
}

export default Home
