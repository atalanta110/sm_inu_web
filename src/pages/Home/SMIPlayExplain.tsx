import React from 'react'
import { isMobile } from 'react-device-detect'
import {
  BoxCard,
  ComponentWrapper,
  ContainerColumn,
  ResponsiveContainer,
  TextCustom,
  SubText,
  ImageContainer,
} from '../../styles/globalStyles'
import SMI_EXPLAIN_ITEM_1 from '../../assets/images/game/Moonshot_Voyage_Image_1.png'
import SMI_EXPLAIN_ITEM_2 from '../../assets/images/game/Moonshot_Voyage_Image_1_-_Copy.png'
import SMI_EXPLAIN_ITEM_3 from '../../assets/images/game/Moonshot_Voyage_Image_2.png'
import SMI_EXPLAIN_ITEM_4 from '../../assets/images/game/Moonshot_Voyage_Image_3.png'
import SMI_EXPLAIN_ITEM_5 from '../../assets/images/game/Moonshot_Voyage_Image_4.png'

const SMIExplainList = [
  {
    id: 1,
    description: '',
    subDescription:
      'SMI PLAY is an online Metaverse-gaming-platform that allows users to earn cryptocurrency by playing games via play-to-earn. Platform items are divided into Standard and Token items.',
    imgSrc: SMI_EXPLAIN_ITEM_1,
  },
  {
    id: 2,
    description: '',
    subDescription:
      'Standard items are not placed on the blockchain and cannot be traded, these are just like items in most video games that have nothing to do with crypto.',
    imgSrc: SMI_EXPLAIN_ITEM_2,
  },
  {
    id: 3,
    description: '',
    subDescription:
      "Token items are stored as Fungible or Non-Fungible Tokens on the Enjin's Ethereum-based JumpNet blockchain, you can either use them in games, sell on a marketplace or melt them to destroy them for cryptocurrency.",
    imgSrc: SMI_EXPLAIN_ITEM_3,
  },
  {
    id: 4,
    description: '',
    subDescription:
      'Users can use their Ethereum address as an account to access any game in the Metaverse, the account and Token items are shared between games.',
    imgSrc: SMI_EXPLAIN_ITEM_4,
  },
  {
    id: 5,
    description: '',
    subDescription:
      'SMI PLAY will launch with one game available - Moonshot Voyage, with more games to join it shortly after.',
    imgSrc: SMI_EXPLAIN_ITEM_5,
  },
]

export const SMIExplainItem: React.FC<{ url: string; description: string; subDescription: string }> = ({
  url,
  description,
  subDescription,
}) => {
  return (
    <BoxCard
      boxWidth={'47%'}
      boxHeight={'150px'}
      border={'5px solid var(--light-navy-blue)'}
      justifyContent={'flex-start'}
      borderRadius={'5px'}
      borderHover={'2px solid var(--secondary-opacity)'}
      backgroundHover={'var(--dark-secondary)'}
    >
      <ImageContainer src={url} width={'75px'} borderRadius={'0'} objectFit={'contain'} margin={'0 20px 0 20px'} />
      <ContainerColumn width={isMobile ? '100%' : '80%'} alignItems={'flex-start'} gap={'20px'}>
        <TextCustom
          fontSize={isMobile ? '1rem' : '1.25rem'}
          fontWeight={600}
          fontFamily={'RubikBold'}
          lineHeight={1.1}
          textAlign={'left'}
        >
          {description}
        </TextCustom>
        <TextCustom fontSize={isMobile ? '0.6rem' : '1rem'} fontWeight={300} lineHeight={1.3} textAlign={'left'}>
          {subDescription}
        </TextCustom>
      </ContainerColumn>
    </BoxCard>
  )
}

export const SMIExplain: React.FC = () => {
  return (
    <ComponentWrapper padding={'24px'}>
      <ContainerColumn>
        <TextCustom
          fontSize={isMobile ? '2rem' : '3.5rem'}
          fontWeight={600}
          fontFamily={'RubikBold'}
          lineHeight={1.1}
          textAlign={'center'}
          margin={'5% 0 2% 0'}
        >
          What is SMI PLAY
        </TextCustom>
        <ResponsiveContainer>
          {SMIExplainList.map((item) => {
            return (
              <SMIExplainItem
                key={item.id}
                url={item.imgSrc}
                description={item.description}
                subDescription={item.subDescription}
              />
            )
          })}
        </ResponsiveContainer>
      </ContainerColumn>
    </ComponentWrapper>
  )
}
