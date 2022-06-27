import React from 'react'
import {
  ComponentWrapper,
  BoxCardWithoutBorder,
  TextCustom,
  BigBoxWithoutShadow,
  ImageContainer,
  ResponsiveBigBoxWithoutShadow,
} from '../../styles/globalStyles'
import { isMobile } from 'react-device-detect'
import BANNER_SECOND from '../../assets/images/game/Raid_Image_3.jpg'

export const RoleOfSMI: React.FC = () => {
  return (
    <ComponentWrapper margin={'50px 0 0'} padding={'24px'}>
      <ResponsiveBigBoxWithoutShadow border={'20px solid var(--light-navy)'} backgroundColor={'var(--light-navy-blue)'}>
        <BoxCardWithoutBorder boxWidth={'40%'}>
          <ImageContainer src={BANNER_SECOND} width={'100%'} borderRadius={'0'} />
        </BoxCardWithoutBorder>
        <BoxCardWithoutBorder flexDirection={'column'} boxWidth={'50%'} alignItems={'flex-start'}>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={isMobile ? '1.8rem' : '2.2rem'}
            fontWeight={700}
            fontFamily={'RubikBold'}
            lineHeight={1.2}
            textAlign={'left'}
            margin={'0 0 0 0'}
          >
            Role of SMI
          </TextCustom>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={isMobile ? '0.8rem' : '1.3rem'}
            fontWeight={100}
            fontFamily={'Rubik'}
            lineHeight={1.2}
            textAlign={'left'}
            margin={'30px 0 0 0'}
          >
            SMI had its ownership renounced, which makes it virtually impossible to change contract code. Original SMI
            is still used on the platform - games can read the SMI amount on players&apos; accounts. SMI holders get
            in-game benefits from holding the token, accordingly to the amount held. The more SMI you hold, the better
            chance of obtaining a rare Token item you have. If you hold above a certain amount of SMI, you can also get
            a special Fish/Dolphin/Whale status for additional benefits, free item rewards etc.
          </TextCustom>
        </BoxCardWithoutBorder>
      </ResponsiveBigBoxWithoutShadow>
    </ComponentWrapper>
  )
}
