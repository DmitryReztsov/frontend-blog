import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background: ${props => props.theme.background.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.h1`
  color: ${props => props.theme.text.primary};
  font-size: 32px;
`

const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`

const MenuItem = styled.li`
  color: ${props => props.theme.text.primary};
`

const list = [
  {
    title: 'Blog',
    href: '/',
  },
  {
    title: 'Projects',
    href: '/',
  },
  {
    title: 'About author',
    href: '/',
  },
  {
    title: 'Contacts',
    href: '/',
  },
]

const PageHeader = () => {
  return (
    <Container>
      <Logo>
        {'<frontzilla/>'}
      </Logo>
      <Menu>
        {list.map((elem) => {
          return <MenuItem key={elem.title}>{elem.title}</MenuItem>
        })}
      </Menu>
    </Container>
  );
};

export default PageHeader;