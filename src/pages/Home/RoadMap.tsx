import React, { useState } from 'react'
import styled from 'styled-components'
import { isMobile } from 'react-device-detect'
import {
  ComponentWrapper,
  ContainerColumn,
  SpacerLarge,
  TextCustom,
  device,
  SubText,
  ImageContainer,
  ResponsiveImageContainer,
  BoxCardWithoutBorder,
} from '../../styles/globalStyles'
import BANNER_THIRD from '../../assets/images/game/Fan_Art_-_Expedition.jpg'
import { TimelineContainer } from '../../components/TimelineContainer'

const ResponsiveWrapper = styled(ContainerColumn)`
  align-items: center;
  @media ${device.laptop} {
    flex-direction: row;
    align-items: flex-start;
  }
`
const cardItems = [
  {
    cardTitle: 'July 2022',
    cardSubtitle: 'Moonshot Voyage Season 0 Launch (PC & Mac)',
  },
  {
    cardTitle: 'September 2022',
    cardSubtitle: 'Midseason Update & Ranked Leaderboards start',
  },
  {
    cardTitle: 'Q4 2022',
    cardSubtitle: 'Moonshot Voyage Mobile Beta Test',
  },
  {
    cardTitle: 'December 2022',
    cardSubtitle: 'Moonshot Voyage Season 1 Launch (PC, Mac, Android, iOS)',
  },
]

export const RoadMap: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState(1)
  const cardSelect = (index: number) => {
    setSelectedCard(index)
  }

  return (
    <ComponentWrapper margin={'0 0 50px'}>
      <ResponsiveWrapper justifyContent={'center'}>
        <TextCustom
          fontSize={isMobile ? '2rem' : '3.5rem'}
          fontWeight={600}
          fontFamily={'RubikBold'}
          lineHeight={1.1}
          textAlign={'center'}
          margin={'5% 0 2% 0'}
        >
          Roadmap
        </TextCustom>
      </ResponsiveWrapper>
      <SpacerLarge />
      <ResponsiveWrapper>
        <BoxCardWithoutBorder>
          <ResponsiveImageContainer
            src={BANNER_THIRD}
            width={'35%'}
            objectFit={'cover'}
            margin={'0 20px 0 20px'}
            borderRadius={'0'}
          />
        </BoxCardWithoutBorder>
        <ContainerColumn>
          {cardItems.map((item, index) => {
            return (
              <TimelineContainer
                key={`card_${index}`}
                cardTitle={item.cardTitle}
                cardContent={item.cardSubtitle}
                cardSelected={selectedCard >= index}
                onMouseMove={() => cardSelect(index)}
                onScroll={() => cardSelect(index)}
              />
            )
          })}
        </ContainerColumn>
      </ResponsiveWrapper>
    </ComponentWrapper>
  )
}
