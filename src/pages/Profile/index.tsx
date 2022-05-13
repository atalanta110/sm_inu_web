import React, { useState, useEffect } from 'react'
import TabMenu from '../../components/TabMenu'
import { ComponentWrapper, ContainerRow, PageWrapper } from '../../styles/globalStyles'
import Banner from '../../components/Banners'
import { TSelectedTab } from '../../types'
import Account from './Account'
import Code from './Code'

const Profile: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TSelectedTab>('account')

  const handleTabItem = (item: TSelectedTab) => {
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
        mainTitle={'User profile'}
        subTitle={'Moonshot Voyage'}
        summary={'You can manage your profile and game settings here.'}
        isClix={true}
      />
      <ComponentWrapper margin={'50px 0 0'} padding={'24px'}>
        <ContainerRow backgroundColor={'var(--dark-navy)'} padding={'10px 30px'}>
          <TabMenu selectedTab={selectedTab} handleTabItem={handleTabItem} />
        </ContainerRow>
        <ContainerRow alignItems={'stretch'}>
          {selectedTab === 'account' && <Account />}
          {selectedTab === 'code' && <Code />}
        </ContainerRow>
      </ComponentWrapper>
    </PageWrapper>
  )
}

export default Profile
