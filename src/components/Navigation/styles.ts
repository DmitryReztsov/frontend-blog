import styled from 'styled-components';
import { Link } from 'react-scroll';


export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Tip = styled.span`
  opacity: 0;
  transition: 0.3s ease;
  font-size: 0.875rem;
`

export const NavLink = styled(Link)`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  align-items: center;
  height: 1rem;
  transition: 0.3s ease;
  cursor: pointer;
  
  &.active {
    transition: 0.3s ease;
    height: 3rem;
  }

  &:hover {
    transition: 0.3s ease;
    
    ${Tip} {
      opacity: 1;
    }
  }
`

export const Dot = styled.span`
  display: block;
  width: 1rem;
  height: 100%;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.text.primary};
`