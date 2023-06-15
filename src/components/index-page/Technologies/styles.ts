import styled from "styled-components";

import { fadeInWithCentering, spinWithCentering } from "@style/animations";

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
`

export const Description = styled.div`
  & > p {
    margin-top: 24px;
  }
  & > h3 {
    margin-top: 32px;
  }
`

export const Tags = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

export const Picture = styled.div`
  position: relative;
  
  & span {
    position: absolute;
    transform: translate(-50%, -50%);
    animation: ${fadeInWithCentering} 1s ease-in-out;
    
    &:nth-child(1) {
      top: 50%;
      left: 50%;
      animation: ${spinWithCentering} 4s infinite linear 1s;
    }
    &:nth-child(2) {
      top: 10%;
      left: 50%;
    }
    &:nth-child(3) {
      top: 30%;
      left: 85%;
    }
    &:nth-child(4) {
      top: 70%;
      left: 85%;
    }
    &:nth-child(5) {
      top: 90%;
      left: 50%;
    }
    &:nth-child(6) {
      top: 70%;
      left: 15%;
    }
    &:nth-child(7) {
      top: 30%;
      left: 15%;
    }
  }
`