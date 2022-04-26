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
} from '../../styles/globalStyles'
import BANNER_THIRD from '../../assets/images/game/Raid_Image_1.jpg'
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
    cardTitle: 'Spaceship',
    cardSubtitle:
      'Your spaceship is your hub, where you can prepare your character for an expedition, check your mail, craft items, view your resources, upgrade your weapons and characters etc. There are many different ships available as Token Items which you can customize using furniture items.',
  },
  {
    cardTitle: 'Expedition',
    cardSubtitle:
      'Expedition is a Tower Defense type game mode, where players defend their base against an endless swarm of enemies and bosses. Players receive Dust from defeating enemies, which they can use to place towers and buy upgrades with. After every boss wave, the difficulty of current expedition rises. The longer a player can last, the more Moonscrap they will receive at the end. Dust, towers, upgrades, score and difficulty will be reset after every expedition, so will be the Expedition level, which is randomly generated.',
  },
  {
    cardTitle: 'Raids',
    cardSubtitle:
      'Raids are longer levels full of enemies, puzzles and a boss fight at the end. Get to the end of the level and defeat the boss to receive a Token Item. Each raid boss has a set list of available item drops which you can view before starting a raid. Players can enter a Raid for free once a day, otherwise a Raid Ticket is needed.',
  },
  {
    cardTitle: 'Combat',
    cardSubtitle:
      'Combat takes a huge part of Moonshot Voyage. It consists of shooting enemies using your character and a weapon of choice while dodging enemy attacks. Your starting character and weapon will be weak, so you should pay a lot of attention to upgrading and optimizing your setup. ',
  },
]

export const Gameplay: React.FC = () => {
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
          Gameplay
        </TextCustom>
      </ResponsiveWrapper>
      <SpacerLarge />
      <ResponsiveWrapper>
        <ImageContainer
          src={BANNER_THIRD}
          width={'35%'}
          objectFit={'cover'}
          margin={'0 20px 0 20px'}
          borderRadius={'0'}
        />
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
