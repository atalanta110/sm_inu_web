import React from 'react'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'
import DOT_BLOCK_EFFECT_BLUE from '../../assets/images/dot-block-effect-blue.svg'
import DOT_BLOCK_EFFECT_RED from '../../assets/images/dot-block-effect-red.svg'
import QUOTATION_MARK from '../../assets/images/quotation-mark.svg'
import BORDER_EFFECT_IMG from '../../assets/images/text-border-bottom-effect.svg'
import {
  AvatarContainer,
  BoxCard,
  ComponentWrapper,
  ContainerColumn,
  ContainerRow,
  Divider,
  ImageContainer,
  SubText,
  TextCustom,
} from '../../styles/globalStyles'

const DotBlockEffectLeft = styled(ImageContainer)`
  position: absolute;
  top: 0;
  left: 0;
`

const DotBlockEffectRight = styled(ImageContainer)`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
  padding: 0;
`

const QuotationMarkBox = styled(ContainerColumn)`
  position: absolute;
  top: 40px;
  left: 10%;
  align-items: center;
`

const QuotationMarkIcon = styled(ImageContainer)`
  border-radius: 0;
  object-fit: fill;
`

export const HowToPlay: React.FC = () => {
  return (
    <ComponentWrapper margin={'80px 0 0'} padding={'0 48px 20px 48px'}>
      <ContainerRow justifyContent={'center'} margin={'0 0 30px 0'}>
        <SubText
          color={'var(--primary-text)'}
          fontSize={isMobile ? '2rem' : '3rem'}
          fontWeight={600}
          fontFamily={'RubikBold'}
          textAlign={'center'}
          borderImg={BORDER_EFFECT_IMG}
        >
          How to play
        </SubText>
      </ContainerRow>
      <ContainerRow width={'100%'} padding={'40px 10px'} margin={'0'} justifyContent={'center'}>
        <DotBlockEffectLeft src={DOT_BLOCK_EFFECT_RED} width={'240px'} height={'auto'} borderRadius={'0'} />
        <DotBlockEffectRight src={DOT_BLOCK_EFFECT_BLUE} width={'240px'} height={'auto'} borderRadius={'0'} />
        <ContainerRow width={'85%'} padding={'0'} margin={'10px 0'} justifyContent={'center'}>
          <BoxCard
            key={1}
            flexDirection={'column'}
            alignItems={'center'}
            padding={'30px 20px 20px'}
            margin={'0'}
            border={'none'}
            borderHover={'none'}
            backgroundColor={'var(--light-navy-blue)'}
            style={{ position: 'relative' }}
          >
            <ContainerRow margin={'10px 0 0'} padding={'10px 30px'}>
              <TextCustom
                fontSize={isMobile ? '0.5rem' : '1rem'}
                fontWeight={300}
                fontFamily={'Rubik'}
                lineHeight={1.5}
                textAlign={'left'}
              >
                1. Download the game launcher here
                <br />
                <br />
                2. Download Enjin Wallet
                <br />
                <br />
                3. Import your DeFi wallet with SMI or create a new one in the Enjin Wallet
                <br />
                <br />
                4. Launch the game
                <br />
                <br />
                5. Register an account in the game or on this website
                <br />
                <br />
                6. Log in to your account
                <br />
                <br />
                7. Link your game account to your Enjin Wallet by scanning a QR code or typing your linking code in the
                Enjin Wallet app manually
                <br />
                <br />
                8. Re-log in to your account
                <br />
                <br />
                9. You&apos;re ready to start playing!
                <br />
              </TextCustom>
            </ContainerRow>
          </BoxCard>
        </ContainerRow>
      </ContainerRow>
    </ComponentWrapper>
  )
}
