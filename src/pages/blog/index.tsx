import React from 'react';
import { HeadFC, PageProps, StaticQueryDocument } from 'gatsby';
import { graphql } from 'gatsby'

import * as S from './styles';

import BaseLayout from '@layouts/BaseLayout';
import Seo from '@components/Seo/Seo';
import { Title1 } from '@style/components/title';
import SiteContainer from '@components/SiteContainer/SiteContainer';
import Post from '@components/blog/Post';

const Blog = ({ data }: PageProps<Queries.loadBlogPostListQuery>) => {
  const posts = data.allContentfulBlogPost.nodes;
  return (
    <BaseLayout>
      <S.Blog>
        <SiteContainer>
          <Title1>
            Blog
          </Title1>
          <S.Posts>
            {posts.map((post) => <Post key={post.id} post={post} />)}
          </S.Posts>
        </SiteContainer>
      </S.Blog>
    </BaseLayout>
  );
};

export default Blog;

export const Head: HeadFC = () => <Seo title="Blog - Frontzilla" />

export const query: StaticQueryDocument = graphql`
  query loadBlogPostList {
    allContentfulBlogPost {
      nodes {
        slug
        id
        createdAt
        title
        author
        intro {
          id
          intro
        }
        previewImg {
          id
          contentful_id
          gatsbyImageData
        }
      }
    }
  }
`
