import styled from 'styled-components';

export const PageFooter = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`

export const Container = styled.div`
  padding: 18px 0;
  display: flex;
  justify-content: space-between;
`

export const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  & span {
    svg {
      path {
        transition: 0.2s ease;
        fill: ${({theme}) => theme.text.secondary}
      }
    }
    
    &:hover {
      svg {
        path {
          transition: 0.2s ease;
          fill: ${({theme}) => theme.palette.primary}
        }
      }
    }
  }
`
