import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const MenuItem = styled(NavLink)<{ fontSize?: string }>`
  color: var(--primary-text);
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.2rem')};
  text-decoration: none;
  margin: 0 0.5rem;
  &:hover {
    color: var(--secondary);
  }
  &.active {
    color: var(--secondary);
  }
`
