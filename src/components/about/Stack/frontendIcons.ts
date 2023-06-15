import Icons from '@assets/icons';
import React from 'react';

export interface ListItem {
  logo: React.ElementType,
  darkThemeLogo?: React.ElementType,
  alt: string,
}

const frontendIcons: ListItem [] = [
  {
    logo: Icons.Frontend.HTML5,
    alt: 'HTML',
  },
  {
    logo: Icons.Frontend.CSS3,
    alt: 'CSS',
  },
  {
    logo: Icons.Frontend.Js,
    alt: 'Javascript',
  },
  {
    logo: Icons.Frontend.Ts,
    alt: 'Typescript',
  },
  {
    logo: Icons.Frontend.React,
    alt: 'React'
  },
  {
    logo: Icons.Frontend.Redux,
    alt: 'Redux',
  },
  {
    logo: Icons.Frontend.Gatsby,
    alt: 'Gatsby',
  },
  {
    logo: Icons.Frontend.Sass,
    alt: 'Sass',
  },
  {
    logo: Icons.Frontend.Mui,
    alt: 'Mui',
  },
  {
    logo: Icons.Frontend.ReactRouter,
    alt: 'React Router',
  },
]

export default frontendIcons;