import styled from "styled-components";

export const Group = styled.div`
`

export const Name = styled.div`
  padding-bottom: 0.5rem;
  border-bottom: ${({theme}) => theme.border.medium};
`

export const Technologies = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1.5rem;
  
  & > span {
    filter: grayscale(1);
    transition: 0.2s ease;
    
    &:hover {
      filter: grayscale(0);
      transition: 0.2s ease;
    }
  }
`

export const Line = styled.div`
  width: 6rem;
  height: 10rem;
  position: relative;
  
  &::before {
    content: '';
    display: block;
    width: 2px;
    height: 100%;
    background-color: ${({theme}) => theme.palette.primary};
    position: absolute;
    top: 0;
    left: calc(50% - 1px);
  }
  &::after {
    content: '';
    display: block;
    width: 1rem;
    height: 1rem;
    background-color: ${({theme}) => theme.palette.primary};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    outline: 3px solid ${({theme}) => theme.background.primary};
    outline-offset: -0.5rem;
  }
`