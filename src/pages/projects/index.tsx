import React from 'react';
import { HeadFC } from 'gatsby';

import BaseLayout from '@layouts/BaseLayout';
import Seo from '@components/Seo/Seo';

const Projects = () => {
  return (
    <BaseLayout>
      Projects
    </BaseLayout>
  );
};

export default Projects;

export const Head: HeadFC = () => <Seo title="Projects - Frontzilla" />
