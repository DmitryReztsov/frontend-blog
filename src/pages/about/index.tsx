import React from 'react';

import BaseLayout from '@layouts/BaseLayout';
import { HeadFC } from 'gatsby';
import Seo from '@components/Seo/Seo';
import Intro from '@components/about/Intro/Intro';
import Stack from '@components/about/Stack/Stack';

const About = () => {
  return (
    <BaseLayout>
      <Intro />
      <Stack />
    </BaseLayout>
  );
};

export default About;

export const Head: HeadFC = () => <Seo title="About - Frontzilla" />