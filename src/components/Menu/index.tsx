import React from 'react'
import styled from 'styled-components'
import { ContainerRow, device } from '../../styles/globalStyles'
import { MenuItem } from './MenuItem'

const MenuContainer = styled(ContainerRow)`
  padding: 0.5rem 1rem;
  display: none;
  @media ${device.laptop} {
    display: flex;
  }
`

const Menu: React.FC = () => {
  return (
    <MenuContainer justifyContent={'flex-start'} width={'fit-content'}>
      <MenuItem to="/leaderboards">Leaderboards</MenuItem>
      <MenuItem to="/transaction">Transaction</MenuItem>
      <MenuItem to="/profile">Profile</MenuItem>
    </MenuContainer>
  )
}

export default Menu
