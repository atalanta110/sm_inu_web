import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import LOGO_IMG from '../../assets/images/Moonshot_voyage_logo.png'

const LogoContainer = styled.img`
  width: 70%;
`

const Logo: React.FC = () => {
  return (
    <NavLink to="/" style={{ width: '10%' }}>
      <LogoContainer src={LOGO_IMG} />
    </NavLink>
  )
}

export default Logo
