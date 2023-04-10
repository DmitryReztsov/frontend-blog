import React, { FC, PropsWithChildren } from 'react';
import { Link as GatsbyLink } from "gatsby"

import styled from 'styled-components';

const StyledLink = styled(props => <GatsbyLink {...props} />)`
  transition: 0.2s ease;
  
  &:hover {
    transition: 0.2s ease;
    color: ${props => props.theme.palette.primary};
  }
`

interface LinkProps {
  to: string,
}

const Link: FC<PropsWithChildren<LinkProps>> = ({ children, to, ...props }) => {
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <StyledLink
        to={to}
        {...props}
      >
        {children}
      </StyledLink>
    )
  }
  return (
    <a href={to} {...props}>
      {children}
    </a>
  )
}

export default Link