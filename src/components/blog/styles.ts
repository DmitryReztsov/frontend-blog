import styled from "styled-components";

import { GatsbyImage } from 'gatsby-plugin-image';
import { Text } from '@style/components/text';
import { Title3 } from '@style/components/title';

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Image = styled(GatsbyImage)`
  height: 200px;
`

export const Title = styled(Title3)`
  transition: 0.2s ease;

  &:hover {
    transition: 0.2s ease;
    color: ${props => props.theme.palette.primary};
  }
`

export const StyledText = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-clamp: 3;
  box-orient: vertical;
`