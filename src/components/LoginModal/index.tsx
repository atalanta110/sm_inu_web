import React, { useState } from 'react'
import Modal from '../Modal'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RootState } from '../../state/reducers'
import { actionCreators } from '../../state'
import styled from 'styled-components/macro'
import { ReactComponent as Close } from '../../assets/images/x.svg'
import { ContainerColumn, ContainerRow, InputWrapper, TextDescription } from '../../styles/globalStyles'
import { MainButton } from '../Buttons/MainButton'

const CloseIcon = styled.div`
  position: absolute;
  right: 1rem;
  top: 14px;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`
const CloseColor = styled(Close)`
  path {
    stroke: #b2b9d2;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 0;
  padding: 0;
  width: 100%;
`
const HeaderRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 1rem 1rem;
  font-weight: 500;
  color: ${(props) => (props.color === 'blue' ? 'var(--secondary)' : 'inherit')};
`
const ContentWrapper = styled.div`
  background-color: var(--primary);
  padding: 0 1rem 1rem 1rem;
`
const UpperSection = styled.div`
  position: relative;

  h5 {
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
  }

  h5:last-child {
    margin-bottom: 0px;
  }

  h4 {
    margin-top: 0;
    font-weight: 500;
  }
`
const OptionGrid = styled.div`
  display: grid;
  grid-gap: 10px;
`
const HoverText = styled.div`
  text-decoration: none;
  color: #ffffff;
  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`

type DivisionType = 'login' | 'register'

type UserInfoType = {
  username: string
  password: string
}

type RegisterInfoType = {
  username: string
  password: string
  confirmPassword: string
}

export default function LoginModal() {
  const globalState = useSelector((state: RootState) => state.global)
  const dispatch = useDispatch()
  const [division, setDivision] = useState<DivisionType>('login')
  const [userInfo, setUserInfo] = useState<UserInfoType>({
    username: '',
    password: '',
  })
  const [registerInfo, setRegisterInfo] = useState<RegisterInfoType>({
    username: '',
    password: '',
    confirmPassword: '',
  })

  const { openLoginModal, setUserData } = bindActionCreators(actionCreators, dispatch)

  const toggleLoginModal = () => {
    openLoginModal(false)
  }

  const loginSubmit = () => {
    const data = new FormData()
    if (userInfo.username === '') return
    if (userInfo.password === '') return

    data.append('username', userInfo.username)
    data.append('password', userInfo.password)

    fetch(`${process.env.REACT_APP_API_BASEURL}/login`, {
      method: 'POST',
      headers: {
        key: `${process.env.REACT_APP_API_KEY}`,
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Login :: ', data)
        if (data?.success) {
          setUserData({
            username: data?.data?.username,
            active: data?.data?.active,
            dSMIAmount: data?.data?.dsmi_amount,
          })
          openLoginModal(false)
        }
      })
      .catch((error) => {
        console.error('Login Error :: ', error)
      })
  }

  const registerSubmit = () => {
    const data = new FormData()
    if (registerInfo.username === '') return
    if (registerInfo.password === '') return
    if (registerInfo.password !== registerInfo.confirmPassword) return

    data.append('username', registerInfo.username)
    data.append('password', registerInfo.password)

    fetch(`${process.env.REACT_APP_API_BASEURL}/register`, {
      method: 'POST',
      headers: {
        key: `${process.env.REACT_APP_API_KEY}`,
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.success) {
          setUserData({
            username: data?.data?.username,
            active: data?.data?.active,
            dSMIAmount: data?.data?.dsmi_amount,
          })
          openLoginModal(false)
        }
      })
      .catch((error) => {
        console.error('Login Error :: ', error)
      })
  }

  const getModalContent = () => {
    if (division === 'login') {
      return (
        <UpperSection>
          <CloseIcon onClick={toggleLoginModal}>
            <CloseColor />
          </CloseIcon>
          <HeaderRow>
            <HoverText>Login</HoverText>
          </HeaderRow>
          <ContentWrapper>
            <ContainerColumn>
              <ContainerColumn alignItems={'start'} margin={'12px 0 0'}>
                <TextDescription>{'Username*'}</TextDescription>
                <InputWrapper
                  placeholder="Username"
                  value={userInfo.username || ''}
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      username: e.target.value,
                    })
                  }}
                  required
                />
              </ContainerColumn>
              <ContainerColumn alignItems={'start'} margin={'12px 0 0'}>
                <TextDescription>{'Password*'}</TextDescription>
                <InputWrapper
                  placeholder="Password"
                  value={userInfo.password || ''}
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      password: e.target.value,
                    })
                  }}
                  type="password"
                  required
                />
              </ContainerColumn>
              <MainButton type="submit" margin={'24px 0 0'} borderRadius={'4px'} onClick={() => loginSubmit()}>
                Login
              </MainButton>
            </ContainerColumn>
            <ContainerColumn alignItems={'start'} margin={'12px 0 0'}>
              <ContainerRow justifyContent={'flex-start'}>
                <TextDescription color={'var(--accent)'}>{`If you have no account yet, please `}</TextDescription>
                <TextDescription
                  color={'var(--secondary)'}
                  onClick={() => setDivision('register')}
                  style={{ cursor: 'pointer' }}
                >{`register`}</TextDescription>
              </ContainerRow>
            </ContainerColumn>
          </ContentWrapper>
        </UpperSection>
      )
    } else if (division === 'register') {
      return (
        <UpperSection>
          <CloseIcon onClick={toggleLoginModal}>
            <CloseColor />
          </CloseIcon>
          <HeaderRow>
            <HoverText>Register</HoverText>
          </HeaderRow>
          <ContentWrapper>
            <ContainerColumn>
              <ContainerColumn alignItems={'start'} margin={'12px 0 0'}>
                <TextDescription>{'Username*'}</TextDescription>
                <InputWrapper
                  placeholder="Username"
                  value={registerInfo.username || ''}
                  onChange={(e) => {
                    setRegisterInfo({
                      ...registerInfo,
                      username: e.target.value,
                    })
                  }}
                  required
                />
              </ContainerColumn>
              <ContainerColumn alignItems={'start'} margin={'12px 0 0'}>
                <TextDescription>{'Password*'}</TextDescription>
                <InputWrapper
                  placeholder="Password"
                  value={registerInfo.password || ''}
                  onChange={(e) => {
                    setRegisterInfo({
                      ...registerInfo,
                      password: e.target.value,
                    })
                  }}
                  type="password"
                  required
                />
              </ContainerColumn>
              <ContainerColumn alignItems={'start'} margin={'12px 0 0'}>
                <TextDescription>{'Confirm Password*'}</TextDescription>
                <InputWrapper
                  placeholder="Confirm Password"
                  value={registerInfo.confirmPassword || ''}
                  onChange={(e) => {
                    setRegisterInfo({
                      ...registerInfo,
                      confirmPassword: e.target.value,
                    })
                  }}
                  type="password"
                  required
                />
              </ContainerColumn>
              <MainButton type="submit" margin={'24px 0 0'} borderRadius={'4px'} onClick={() => registerSubmit()}>
                Register
              </MainButton>
            </ContainerColumn>
            <ContainerColumn alignItems={'start'} margin={'12px 0 0'}>
              <ContainerRow justifyContent={'flex-start'}>
                <TextDescription color={'var(--accent)'}>{`If you have an account already, please `}</TextDescription>
                <TextDescription
                  color={'var(--secondary)'}
                  onClick={() => setDivision('login')}
                  style={{ cursor: 'pointer' }}
                >{`login`}</TextDescription>
              </ContainerRow>
            </ContainerColumn>
          </ContentWrapper>
        </UpperSection>
      )
    }
  }

  return (
    <Modal isOpen={globalState.login_modal} onDismiss={toggleLoginModal} minHeight={false} maxHeight={90}>
      <Wrapper>{getModalContent()}</Wrapper>
    </Modal>
  )
}
