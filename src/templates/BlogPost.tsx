import React from 'react';
import { PageProps } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import * as S from './styles';

import { Title1 } from '@style/components/title';
import BaseLayout from '@layouts/BaseLayout';
import SiteContainer from '@components/SiteContainer/SiteContainer';
import { Text } from '@style/components/text';


const BlogPost = ({ pageContext: { title, author, createdAt, previewImg, text, tags } }: PageProps<any, Queries.ContentfulBlogPost>) => {
  console.log(JSON.parse(text?.raw || ''))
  return (
    <BaseLayout>
      <SiteContainer>
        <S.Content>
          <Title1>{title}</Title1>
          <Text>
            {`${author}, published ${new Date(Date.parse(createdAt || '')).toLocaleString("en-US")}`}
          </Text>
          {documentToReactComponents(JSON.parse(text?.raw || ''))}
        </S.Content>
      </SiteContainer>
    </BaseLayout>
  );
};

export default BlogPost;