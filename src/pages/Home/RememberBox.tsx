import React from 'react'
import {
  ComponentWrapper,
  BoxCardWithoutBorder,
  TextCustom,
  BigBoxWithoutShadow,
  ImageContainer,
  TextMain,
} from '../../styles/globalStyles'
import { isMobile } from 'react-device-detect'
import BANNER_SECOND from '../../assets/images/game/Raid_Image_3.jpg'

export const RememberBox: React.FC = () => {
  return (
    <ComponentWrapper margin={'50px 0 0'} padding={'24px'}>
      <BigBoxWithoutShadow border={'20px solid var(--light-navy)'} backgroundColor={'var(--light-navy-blue)'}>
        <BoxCardWithoutBorder boxWidth={'40%'}>
          <ImageContainer src={BANNER_SECOND} width={'100%'} margin={'-5% 0 0 0'} borderRadius={'0'} />
        </BoxCardWithoutBorder>
        <BoxCardWithoutBorder flexDirection={'column'} boxWidth={'50%'} alignItems={'flex-start'}>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={isMobile ? '1.8rem' : '2rem'}
            fontWeight={700}
            fontFamily={'RubikBold'}
            lineHeight={1.2}
            textAlign={'left'}
            margin={'0 0 0 0'}
          >
            Character Statistics
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
            <TextMain color={'#00A39C'}>Health - </TextMain>
            When your health is depleted you die. Your allowed three characters, so when all three health bars are
            depleted, YOU LOSE! Damage
          </TextCustom>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={isMobile ? '1.2rem' : '1.5rem'}
            fontWeight={100}
            fontFamily={'Rubik'}
            lineHeight={1}
            textAlign={'left'}
            margin={'5px 0 0 0'}
          >
            <TextMain color={'#00A39C'}>Damage - </TextMain>
            Base flat damage assigned to your shooting and skills
          </TextCustom>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={isMobile ? '1.2rem' : '1.5rem'}
            fontWeight={100}
            fontFamily={'Rubik'}
            lineHeight={1}
            textAlign={'left'}
            margin={'5px 0 0 0'}
          >
            <TextMain color={'#00A39C'}>Crit Chance - </TextMain>
            Chance for a critical strike
          </TextCustom>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={isMobile ? '1.2rem' : '1.5rem'}
            fontWeight={100}
            fontFamily={'Rubik'}
            lineHeight={1}
            textAlign={'left'}
            margin={'5px 0 0 0'}
          >
            <TextMain color={'#00A39C'}>Crit Damage - </TextMain>
            Damage modifier for critical strikes
          </TextCustom>
        </BoxCardWithoutBorder>
      </BigBoxWithoutShadow>
    </ComponentWrapper>
  )
}
