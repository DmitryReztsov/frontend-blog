import styled from "styled-components";
import { GatsbyImage } from 'gatsby-plugin-image';

import { Text } from '@style/components/text';
import { Title2, Title3 } from '@style/components/title';
import UiLink from '@uikit/Link/Link';

export const Content = styled.div`
  padding: 10rem 0;
  position: relative;
`

export const Back = styled.div`
  position: absolute;
  top: 8rem;
`

export const Author = styled(Text)`
  margin-top: 0.5rem;
  font-style: italic;
`

export const Image = styled(GatsbyImage)`
  margin-top: 2rem;
  height: 300px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`

export const Bold = styled(Text)`
  font-weight: 700;
`

export const CommonText = styled(Text)`
  margin-top: 1.5rem;
`

export const Heading2 = styled(Title2)`
  margin-top: 2rem;
  margin-bottom: 1rem;
`

export const Heading3 = styled(Title3)`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`

export const Code = styled.code`
  background-color: ${({ theme }) => theme.background.code};
  border-radius: 0.25rem;
  padding: 0.2rem;
`

export const Link = styled(UiLink)`
  color: ${({ theme }) => theme.palette.primary};
`

export const DividerContainer = styled.div`
  margin-top: 2rem;
`

export const TagsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
`