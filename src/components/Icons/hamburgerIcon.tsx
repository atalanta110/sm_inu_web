import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import HAMBURGER_IMG from '../../assets/images/menu.png'
import { actionCreators } from '../../state'
import { RootState } from '../../state/reducers'
import { ContainerColumn, ContainerRow, device } from '../../styles/globalStyles'
import { LoginButton } from '../Buttons/LoginButton'
import { MenuItem } from '../Menu/MenuItem'

const HamburgerContainer = styled.img`
  display: fixed;

  @media ${device.laptop} {
    display: none;
  }
`

const HamburgerMenuWrapper = styled(ContainerColumn)`
  position: absolute;
  top: 72px;
  right: 0;
  z-index: 1;
  background-color: var(--primary);
  padding: 24px;
  border-radius: 12px;
  border: 2px solid var(--secondary);
  transition: background-color 3000ms ease-in-out 0s, opacity 8000ms ease-in-out 0s;
`
const HamburgerMenuItem: React.FC<{ label: string; navLink: string }> = ({ label, navLink }) => {
  return (
    <ContainerRow margin={'24px 0 0 0'} justifyContent={'center'}>
      <MenuItem to={`/${navLink}`} fontSize={'1.5rem'}>
        {label}
      </MenuItem>
    </ContainerRow>
  )
}

const HamburgerMenu: React.FC<{ setIsOpen: (isOpen: boolean) => void }> = ({ setIsOpen }) => {
  const globalState = useSelector((state: RootState) => state.global)
  const dispatch = useDispatch()

  const { openLoginModal, logout } = bindActionCreators(actionCreators, dispatch)

  const mainLogout = () => {
    logout()
    window.location.href = '/'
  }

  return (
    <HamburgerMenuWrapper justifyContent={'flex-start'} onClick={() => setIsOpen(false)}>
      <HamburgerMenuItem label={'Leaderboards'} navLink={'leaderboards'} />
      <HamburgerMenuItem label={'Store'} navLink={'store'} />
      {globalState?.user_info?.username && <HamburgerMenuItem label={'Profile'} navLink={'profile'} />}
      {globalState?.user_info?.username ? (
        <LoginButton
          width={'fit-content'}
          borderRadius={'24px'}
          padding={'24px 24px'}
          backgroundColor={'var(--secondary)'}
          margin={'20px 0'}
          onClick={() => mainLogout()}
        >
          Logout
        </LoginButton>
      ) : (
        <LoginButton
          width={'fit-content'}
          borderRadius={'24px'}
          padding={'24px 24px'}
          backgroundColor={'var(--secondary)'}
          margin={'20px 0'}
          onClick={() => openLoginModal(globalState.login_modal ? false : true)}
        >
          Login
        </LoginButton>
      )}
    </HamburgerMenuWrapper>
  )
}
const Hamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    return () => {
      setIsOpen(false)
    }
  }, [])

  return (
    <>
      <HamburgerContainer src={HAMBURGER_IMG} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <HamburgerMenu setIsOpen={setIsOpen} />}
    </>
  )
}

export default Hamburger
