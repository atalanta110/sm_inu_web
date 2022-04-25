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
import PRODUCT_1 from '../../assets/images/feature/Moonshot_voyage_Holder_Status_-_Dolphin.jpg'
import PRODUCT_2 from '../../assets/images/feature/Moonshot_voyage_Holder_Status_-_Fish.jpg'
import PRODUCT_3 from '../../assets/images/feature/Moonshot_voyage_Holder_Status_-_Whale.jpg'

export const ProductExplainItem: React.FC<{ src: string; description: Array<string>; highlightText: string }> = ({
  src,
  description,
  highlightText,
}) => {
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
      >
        <ImageContainer src={src} width={'75%'} borderRadius={'0'} objectFit={'contain'} />
      </ImageIconContainer>
      <TextCustom
        color={'var(--primary-text)'}
        fontSize={isMobile ? '0.8rem' : '35px'}
        fontWeight={300}
        fontFamily={'Rubik'}
        lineHeight={1.1}
        textAlign={'center'}
        margin={'10% 0 10% 0'}
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
    </BoxCard>
  )
}

export const ProductExplain: React.FC = () => {
  return (
    <ComponentWrapper margin={'50px 0 0'} padding={'24px'}>
      <ContainerRow>
        <ProductExplainItem
          src={PRODUCT_1}
          description={['Moonshot voyage', 'holder status.']}
          highlightText={'Dolphin'}
        />
        <ProductExplainItem
          src={PRODUCT_2}
          description={['Moonshot voyage', 'holder status.']}
          highlightText={'Fish'}
        />
        <ProductExplainItem
          src={PRODUCT_3}
          description={['Moonshot voyage', 'holder status.']}
          highlightText={'Whale'}
        />
      </ContainerRow>
    </ComponentWrapper>
  )
}
