import styled from "styled-components"

interface TitleProps {
  weight?: 200 | 300 | 400 | 500 | 600 | 700
}

export const Title1 = styled.h1<TitleProps>`
  font-size: 3rem;
  line-height: 3.5rem;
  font-weight: ${({ weight = 700 }) => weight};
`

export const Title2 = styled.h2<TitleProps>`
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: ${({ weight = 700 }) => weight};
`

export const Title3 = styled.h3<TitleProps>`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: ${({ weight = 700 }) => weight};
`