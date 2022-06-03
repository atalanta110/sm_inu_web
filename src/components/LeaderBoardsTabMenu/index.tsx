import React from 'react'
import styled from 'styled-components'
import { ContainerRow, TextCustom } from '../../styles/globalStyles'
import { LeaderBoardSelectedTab } from '../../types'
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
  selectedTab: LeaderBoardSelectedTab
  handleTabItem: (item: LeaderBoardSelectedTab) => void
}

const LeaderBoardsTabMenu: React.FC<ITabMenu> = ({ handleTabItem, selectedTab }) => {
  return (
    <TabMenuContainer justifyContent={'flex-start'} width={'fit-content'}>
      <TabMenuItem
        backgroundColor={selectedTab === 'common' ? 'var(--secondary)' : 'transparent'}
        onClick={() => handleTabItem('common')}
      >
        <TextCustom color={'var(--primary-text)'}>{'Common'}</TextCustom>
      </TabMenuItem>
      <TabMenuItem
        backgroundColor={selectedTab === 'uncommon' ? 'var(--secondary)' : 'transparent'}
        onClick={() => handleTabItem('uncommon')}
      >
        <TextCustom color={'var(--primary-text)'}>{'Uncommon'}</TextCustom>
      </TabMenuItem>
      <TabMenuItem
        backgroundColor={selectedTab === 'unrestricted' ? 'var(--secondary)' : 'transparent'}
        onClick={() => handleTabItem('unrestricted')}
      >
        <TextCustom color={'var(--primary-text)'}>{'Unrestricted'}</TextCustom>
      </TabMenuItem>
    </TabMenuContainer>
  )
}

export default LeaderBoardsTabMenu
