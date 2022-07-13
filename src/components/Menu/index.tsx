import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState } from '../../state/reducers'
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
  const globalState = useSelector((state: RootState) => state.global)
  return (
    <MenuContainer justifyContent={'flex-start'} width={'fit-content'}>
      <MenuItem to="/leaderboards">Leaderboards</MenuItem>
      <MenuItem to="/store">Store</MenuItem>
      {globalState?.user_info?.username && <MenuItem to="/profile">Profile</MenuItem>}
    </MenuContainer>
  )
}

export default Menu
