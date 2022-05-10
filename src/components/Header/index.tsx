import React from 'react'
import styled from 'styled-components'
import { ContainerRow } from '../../styles/globalStyles'
import Logo from '../Icons/logo'
import Menu from '../Menu'
import { LoginButton } from '../Buttons/LoginButton'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RootState } from '../../state/reducers'
import { actionCreators } from '../../state'

const HeaderContainer = styled(ContainerRow)`
  padding: 0.5rem 1rem;
  height: 120px;
  background-color: var(--dark-navy);
  box-shadow: 0px 1px 10px var(--navy-blue-opacity);
  z-index: 999;
  position: fixed;
`

const Header: React.FC = () => {
  const globalState = useSelector((state: RootState) => state.global)
  const dispatch = useDispatch()

  const { openModal } = bindActionCreators(actionCreators, dispatch)

  return (
    <HeaderContainer>
      <ContainerRow width={'fit-content'} justifyContent={'flex-start'}>
        <Logo />
        <Menu />
        {`state: ${globalState.login_modal}`}
        <LoginButton
          width={'fit-content'}
          borderRadius={'24px'}
          padding={'24px 24px'}
          backgroundColor={'var(--secondary)'}
          margin={'20px 0'}
          onClick={() => openModal(true)}
        >
          Login
        </LoginButton>
      </ContainerRow>
    </HeaderContainer>
  )
}

export default Header
