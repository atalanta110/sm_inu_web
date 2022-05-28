import React from 'react'
import styled from 'styled-components'
import { ContainerRow, TextCustom } from '../../styles/globalStyles'
import { TSelectedTab } from '../../types'
import { MainButton } from '../Buttons/MainButton'

const TabMenuContainer = styled(ContainerRow)`
  padding: 0rem 1rem;
  border-radius: 32px;
  border: 3px solid var(--light-navy-blue);
`
const TabMenuItem = styled(MainButton)`
  border-radius: 32px;
  height: 100%;
  padding: 8px 30px;
  box-shadow: none;
`

interface ITabMenu {
  selectedTab: TSelectedTab
  handleTabItem: (item: TSelectedTab) => void
}

const TabMenu: React.FC<ITabMenu> = ({ handleTabItem, selectedTab }) => {
  return (
    <TabMenuContainer justifyContent={'flex-start'} width={'fit-content'}>
      <TabMenuItem
        backgroundColor={selectedTab === 'account' ? 'var(--secondary)' : 'transparent'}
        onClick={() => handleTabItem('account')}
      >
        <TextCustom color={'var(--primary-text)'}>{'Account'}</TextCustom>
      </TabMenuItem>
      <TabMenuItem
        backgroundColor={selectedTab === 'code' ? 'var(--secondary)' : 'transparent'}
        onClick={() => handleTabItem('code')}
      >
        <TextCustom color={'var(--primary-text)'}>{'Code'}</TextCustom>
      </TabMenuItem>
      <TabMenuItem
        backgroundColor={selectedTab === 'dsmi' ? 'var(--secondary)' : 'transparent'}
        onClick={() => handleTabItem('dsmi')}
      >
        <TextCustom color={'var(--primary-text)'}>{'dSMI'}</TextCustom>
      </TabMenuItem>
    </TabMenuContainer>
  )
}

export default TabMenu
