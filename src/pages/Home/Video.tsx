import React from 'react'
import { isMobile } from 'react-device-detect'
import styled from 'styled-components'
import { VideoContainer } from '../../components/VideoContainer'
import { ComponentWrapper } from '../../styles/globalStyles'
import PostImage from '../../assets/images/game/Raid_Image_1.jpg'

const CollectionVideoWrapper = styled(ComponentWrapper)`
  display: flex;
  justify-content: center;
  margin: 5% 0;
`
export const Video: React.FC = () => {
  return (
    <CollectionVideoWrapper>
      <VideoContainer
        width={isMobile ? '50%' : '80%'}
        url={'http://45.27.251.181/v/Moon_Voy.mp4'}
        posterUrl={PostImage}
      />
    </CollectionVideoWrapper>
  )
}
