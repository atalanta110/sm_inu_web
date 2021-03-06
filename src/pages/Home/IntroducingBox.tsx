import React from 'react'
import {
  ComponentWrapper,
  BoxCardWithoutBorder,
  TextCustom,
  ContainerRow,
  ImageContainer,
  ResponsiveContainerRow,
  ResponsiveImageContainer,
} from '../../styles/globalStyles'
import { isMobile } from 'react-device-detect'
import BANNER_MAIN from '../../assets/images/game/Raid_Image_2.jpg'

export const IntroducingBox: React.FC = () => {
  return (
    <ComponentWrapper margin={'50px 0 0'} padding={'24px'}>
      <ResponsiveContainerRow>
        <BoxCardWithoutBorder flexDirection={'column'} boxWidth={'60%'} alignItems={'flex-start'}>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={isMobile ? '2rem' : '3.2rem'}
            fontWeight={700}
            fontFamily={'RubikBold'}
            lineHeight={1.5}
            textAlign={'left'}
          >
            Moonshot Voyage
          </TextCustom>
          <TextCustom
            color={'var(--primary-text)'}
            fontSize={isMobile ? '0.8rem' : '1.1rem'}
            fontWeight={100}
            fontFamily={'LatoThin'}
            lineHeight={1.6}
            textAlign={'left'}
            style={{ marginTop: '10px' }}
          >
            Moonshot Voyage is a top-down shooter using a play-and-earn system based on SMI Play Token Items powered by
            Enjin. <br />
            <br />
            Take a role of a space bounty hunter and traverse an unknown galaxy after being sucked into a black hole
            while trying to find a legendary spaceship - the Moonshot. It won&apos;t be an easy task though... <br />
            Fight aliens, monsters, ghosts and other deadly creatures along the way to reach the Moonshot and all its
            secrets.
          </TextCustom>
        </BoxCardWithoutBorder>
        <BoxCardWithoutBorder>
          <ResponsiveImageContainer src={BANNER_MAIN} width={'60%'} style={{ borderRadius: 0 }} />
        </BoxCardWithoutBorder>
      </ResponsiveContainerRow>
    </ComponentWrapper>
  )
}
