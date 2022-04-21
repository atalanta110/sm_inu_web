import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import LOGO_IMG from '../../assets/images/logo.png'

const LogoContainer = styled.img``

const Logo: React.FC = () => {
  return (
    <NavLink to="/">
      <LogoContainer src={LOGO_IMG} />
    </NavLink>
  )
}

export default Logo
