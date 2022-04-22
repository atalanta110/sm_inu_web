import React from 'react'
import { PageWrapper } from '../../styles/globalStyles'
import { IntroducingBox } from './IntroducingBox'
import { RememberBox } from './RememberBox'

const Home: React.FC = () => {
  return (
    <PageWrapper>
      <IntroducingBox />
      <RememberBox />
    </PageWrapper>
  )
}

export default Home
