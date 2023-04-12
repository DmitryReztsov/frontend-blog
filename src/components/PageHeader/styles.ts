import styled from 'styled-components';
import Link from '@uikit/Link/Link';

export const PageHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 3;
`

export const Container = styled.div`
  padding: 18px 0;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
`

export const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  flex: 0 0 20%;
  font-family: Orbitron;
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text.secondary};
`

export const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  flex: 0 0 20%;
`