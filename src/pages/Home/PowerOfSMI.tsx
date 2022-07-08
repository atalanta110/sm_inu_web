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

export const PowerOfSMI: React.FC = () => {
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
            Power of $SMI
          </TextCustom>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={isMobile ? '0.8rem' : '1rem'}
            fontWeight={100}
            fontFamily={'Rubik'}
            lineHeight={1.2}
            textAlign={'left'}
            margin={'30px 0 0 0'}
          >
            Hold $SMI to have a better chance of minting higher rarity NFTs! The more $SMI you hold, the higher your
            rates are. $SMI holders also get free extra rewards based on how many tokens they hold. You can also buy NFT
            lootboxes and Raid Tokens using SMI in our Store. Get $SMI here:{` `}
            <a
              onClick={() =>
                window.open(
                  'https://app.uniswap.org/#/swap?outputCurrency=0xcd7492db29e2ab436e819b249452ee1bbdf52214&use=V2',
                  '_blank'
                )
              }
              style={{
                textDecorationLine: 'underline',
                cursor: 'pointer',
                color: 'aquamarine',
              }}
            >
              Buy $SMI
            </a>
          </TextCustom>
        </BoxCardWithoutBorder>
      </ResponsiveBigBoxWithoutShadow>
    </ComponentWrapper>
  )
}
