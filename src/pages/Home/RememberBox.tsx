import React from 'react'
import {
  ComponentWrapper,
  BoxCardWithoutBorder,
  TextCustom,
  BigBoxWithoutShadow,
  ImageContainer,
} from '../../styles/globalStyles'
import { isMobile } from 'react-device-detect'
import BANNER_SECOND from '../../assets/images/banner-second.svg'

export const RememberBox: React.FC = () => {
  return (
    <ComponentWrapper margin={'50px 0 0'} padding={'24px'}>
      <BigBoxWithoutShadow border={'20px solid var(--light-navy)'} backgroundColor={'var(--light-navy-blue)'}>
        <BoxCardWithoutBorder boxWidth={'40%'}>
          <ImageContainer src={BANNER_SECOND} width={'100%'} margin={'-15% 0 0 0'} />
        </BoxCardWithoutBorder>
        <BoxCardWithoutBorder flexDirection={'column'} boxWidth={'50%'} alignItems={'flex-start'}>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={isMobile ? '1.8rem' : '2rem'}
            fontWeight={700}
            fontFamily={'RubikBold'}
            lineHeight={1.2}
            textAlign={'left'}
            margin={'-15% 0 0 0'}
          >
            We do not remember days
          </TextCustom>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={isMobile ? '1.8rem' : '2rem'}
            fontWeight={700}
            fontFamily={'RubikBold'}
            lineHeight={1.1}
            textAlign={'left'}
          >
            We remember moments
          </TextCustom>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={isMobile ? '1.2rem' : '1.5rem'}
            fontWeight={100}
            fontFamily={'Rubik'}
            lineHeight={1}
            textAlign={'left'}
            margin={'30px 0 0 0'}
          >
            --Cesare Pavese
          </TextCustom>
        </BoxCardWithoutBorder>
      </BigBoxWithoutShadow>
    </ComponentWrapper>
  )
}
