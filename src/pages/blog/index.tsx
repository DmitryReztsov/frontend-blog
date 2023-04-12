import React from 'react';
import { HeadFC, PageProps, StaticQueryDocument } from 'gatsby';
import { graphql } from 'gatsby'

import BaseLayout from '@layouts/BaseLayout';
import Seo from '@components/Seo/Seo';
import { Title1 } from '@style/components/title';
import SiteContainer from '@components/SiteContainer/SiteContainer';
import PreviewPost from '@components/blog/PreviewPost';
import styled from 'styled-components';

const StyledBlog = styled.div`
  padding-top: 10rem;
  min-height: 100%;
`

const Posts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  gap: 2rem;
`

const Blog = ({ data }: PageProps<Queries.loadBlogPostListQuery>) => {
  const posts = data.allContentfulBlogPost.nodes;
  return (
    <BaseLayout>
      <StyledBlog>
        <SiteContainer>
          <Title1>
            Blog
          </Title1>
          <Posts>
            {posts.map((post) => <PreviewPost key={post.id} post={post} />)}
          </Posts>
        </SiteContainer>
      </StyledBlog>
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
