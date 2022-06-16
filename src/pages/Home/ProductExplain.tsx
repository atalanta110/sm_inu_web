import React from 'react'
import {
  ComponentWrapper,
  BoxCard,
  TextCustom,
  ContainerRow,
  ImageContainer,
  SubText,
  ImageIconContainer,
} from '../../styles/globalStyles'
import { isMobile } from 'react-device-detect'
import DOLPHINE from '../../assets/images/feature/Website_PNG_-_Moonshot_voyage_Holder_Status_-_Dolphine.png'
import FISH from '../../assets/images/feature/Website_PNG_-_Moonshot_voyage_Holder_Status_-_Fish.png'
import WHALE from '../../assets/images/feature/Website_PNG_-_Moonshot_voyage_Holder_Status_-_Whale.png'

export const ProductExplainItem: React.FC<{
  src: string
  description: Array<string>
  highlightText: string
  hold: string
  reward: string
  note: string
}> = ({ src, description, highlightText, hold, reward, note }) => {
  return (
    <BoxCard
      boxWidth={'30%'}
      boxHeight={'498px'}
      border={'10px solid var(--light-navy)'}
      backgroundColor={'var(--light-navy-blue)'}
      flexDirection={'column'}
      justifyContent={'space-around'}
    >
      <ImageIconContainer
        position={'relative'}
        boxWidth={'251px'}
        boxHeight={'251px'}
        border={'5px solid var(--light-navy)'}
        backgroundColor={'var(--purple)'}
        margin={'-30% 0 0 0'}
        padding={'0'}
      >
        <ImageContainer src={src} width={'100%'} borderRadius={'0'} objectFit={'contain'} />
      </ImageIconContainer>
      <div>
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={isMobile ? '0.8rem' : '30px'}
          fontWeight={300}
          fontFamily={'Rubik'}
          lineHeight={1.1}
          textAlign={'center'}
          margin={'10% 0 5% 0'}
        >
          {description[0]} &nbsp;
          <SubText
            color={'var(--secondary)'}
            fontSize={isMobile ? '0.8rem' : '35px'}
            fontWeight={300}
            fontFamily={'Rubik'}
            textAlign={'center'}
          >
            {highlightText}
          </SubText>
          &nbsp; {description[1]}
        </TextCustom>
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={isMobile ? '0.5rem' : '30px'}
          fontWeight={10}
          fontFamily={'Rubik'}
          lineHeight={1.1}
          textAlign={'center'}
        >
          <SubText
            color={'var(--secondary)'}
            fontSize={isMobile ? '0.8rem' : '30px'}
            fontWeight={10}
            fontFamily={'Rubik'}
            textAlign={'center'}
          >
            {`${hold} `}
          </SubText>
          <SubText
            color={'var(--primary-text)'}
            fontSize={isMobile ? '0.8rem' : '20px'}
            fontWeight={10}
            fontFamily={'Rubik'}
            textAlign={'center'}
          >
            SMI
          </SubText>
        </TextCustom>
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={isMobile ? '0.5rem' : '15px'}
          fontWeight={100}
          fontFamily={'Rubik'}
          lineHeight={1.1}
          textAlign={'center'}
        >
          Daily Rewards:{` `}
          <SubText
            color={'var(--secondary)'}
            fontSize={isMobile ? '0.8rem' : '20px'}
            fontWeight={100}
            fontFamily={'Rubik'}
            textAlign={'center'}
          >
            {reward}
          </SubText>
        </TextCustom>
        <TextCustom
          color={'var(--primary-text)'}
          fontSize={isMobile ? '0.5rem' : '15px'}
          fontWeight={100}
          fontFamily={'Rubik'}
          lineHeight={1.1}
          textAlign={'center'}
        >
          {note}
        </TextCustom>
      </div>
    </BoxCard>
  )
}

export const ProductExplain: React.FC = () => {
  return (
    <ComponentWrapper margin={'50px 0 0'} padding={'24px'}>
      <ContainerRow>
        <ProductExplainItem
          src={FISH}
          description={['Moonshot voyage', 'holder status']}
          highlightText={'Fish'}
          hold={'1M'}
          reward={'10 Moonscrap & Raid Token'}
          note={'Improved Minting Rates'}
        />
        <ProductExplainItem
          src={DOLPHINE}
          description={['Moonshot voyage', 'holder status']}
          highlightText={'Dolphin'}
          hold={'100M'}
          reward={'25 Moonscrap & Raid Token'}
          note={'Mint Uncommon NFTs & Higher'}
        />
        <ProductExplainItem
          src={WHALE}
          description={['Moonshot voyage', 'holder status']}
          highlightText={'Whale'}
          hold={'1B'}
          reward={'50 Moonscrap & Raid Token'}
          note={'Mint Rare NFTs & Higher'}
        />
      </ContainerRow>
    </ComponentWrapper>
  )
}
