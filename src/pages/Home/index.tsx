import React from 'react'
import { PageWrapper } from '../../styles/globalStyles'
import { IntroducingBox } from './IntroducingBox'
import { Video } from './Video'
import { RoleOfSMI } from './RoleOfSMI'
import { ProductExplain } from './ProductExplain'
import { SMIExplain } from './SMIPlayExplain'
import { Gameplay } from './Gameplay'

const Home: React.FC = () => {
  return (
    <PageWrapper>
      <IntroducingBox />
      <Video />
      <RoleOfSMI />
      <ProductExplain />
      <SMIExplain />
      <Gameplay />
    </PageWrapper>
  )
}

export default Home
