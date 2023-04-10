import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import BaseLayout from '@layouts/BaseLayout';
import Seo from '@components/Seo/Seo';
import Intro from "@components/index-page/Intro/Intro";
import Technologies from "@components/index-page/Technologies/Technologies";
import Trending from '@components/index-page/Trending/Trending';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <BaseLayout>
      <Intro />
      <Technologies />
      <Trending />
    </BaseLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <Seo title="Home - Frontzilla" />
