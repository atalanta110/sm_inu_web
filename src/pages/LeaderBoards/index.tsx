import React, { useState, useEffect } from 'react'
import TabMenu from '../../components/LeaderBoardsTabMenu'
import { ComponentWrapper, ContainerRow, PageWrapper } from '../../styles/globalStyles'
import Banner from '../../components/Banners'
import { LeaderBoardSelectedTab } from '../../types'
import Common from './Common'
import Uncommon from './Uncommon'
import Unrestricted from './Unrestricted'

const Profile: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<LeaderBoardSelectedTab>('common')

  const handleTabItem = (item: LeaderBoardSelectedTab) => {
    setSelectedTab(item)
  }

  useEffect(() => {
    if (window.localStorage.getItem('selectedTab')) {
      setSelectedTab(JSON.parse(window.localStorage.getItem('selectedTab')!))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('selectedTab', JSON.stringify(selectedTab))
  }, [selectedTab])

  return (
    <PageWrapper>
      <Banner
        mainTitle={'Leaderboards'}
        subTitle={'Moonshot Voyage'}
        summary={
          'Check the top 10 Moonshot Voyage players in every leaderboards category.<br /><br /> Current Season: Pre-Season'
        }
        isClix={true}
      />
      <ComponentWrapper padding={'24px'}>
        <ContainerRow backgroundColor={'var(--dark-navy)'} padding={'10px 30px'}>
          <TabMenu selectedTab={selectedTab} handleTabItem={handleTabItem} />
        </ContainerRow>
        <ContainerRow alignItems={'stretch'}>
          {selectedTab === 'common' && <Common />}
          {selectedTab === 'uncommon' && <Uncommon />}
          {selectedTab === 'unrestricted' && <Unrestricted />}
        </ContainerRow>
      </ComponentWrapper>
    </PageWrapper>
  )
}

export default Profile
