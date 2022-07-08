import React from 'react'
import { PageWrapper } from '../../styles/globalStyles'
import { IntroducingBox } from './IntroducingBox'
import { Video } from './Video'
import { PowerOfSMI } from './PowerOfSMI'
import { ProductExplain } from './ProductExplain'
import { GamePlay } from './GamePlay'
import { RoadMap } from './RoadMap'
import { HowToPlay } from './HowToPlay'

const Home: React.FC = () => {
  return (
    <PageWrapper>
      <IntroducingBox />
      <Video />
      <PowerOfSMI />
      <ProductExplain />
      <HowToPlay />
      {/* <GamePlay /> */}
      <RoadMap />
    </PageWrapper>
  )
}

export default Home
