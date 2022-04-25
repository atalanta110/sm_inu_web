import React from 'react'
import styled from 'styled-components'
import { ContainerRow } from '../../styles/globalStyles'
import Logo from '../Icons/logo'
import Menu from '../Menu'

const HeaderContainer = styled(ContainerRow)`
  padding: 0.5rem 1rem;
  height: 120px;
  background-color: var(--dark-navy);
  box-shadow: 0px 1px 10px var(--navy-blue-opacity);
  z-index: 999;
  position: fixed;
`

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <ContainerRow width={'fit-content'} justifyContent={'flex-start'}>
        <Logo />
        <Menu />
      </ContainerRow>
    </HeaderContainer>
  )
}

export default Header
