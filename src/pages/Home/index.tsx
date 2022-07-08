import React from 'react'
import { PageWrapper } from '../../styles/globalStyles'
import { IntroducingBox } from './IntroducingBox'
import { Video } from './Video'
import { PowerOfSMI } from './PowerOfSMI'
import { ProductExplain } from './ProductExplain'
import { GamePlayExplanation } from './GamePlayExplanation'
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
      <GamePlayExplanation />
      <RoadMap />
    </PageWrapper>
  )
}

export default Home
