import React, { FC } from 'react';
import { getImage } from "gatsby-plugin-image"

import * as S from './styles';

import Link from '@uikit/Link/Link';

interface PostProps {
  post: Queries.ContentfulBlogPost,
}

const PreviewPost: FC<PostProps> = ({ post }) => {
  const { previewImg, slug, intro, title } = post;
  const image = getImage(previewImg!.gatsbyImageData)
  return (
    <S.Post>
      <Link to={`${slug}`}>
        <S.Image
          image={image!}
          alt={'data.blogPost.author'}
        />
      </Link>
      <Link to={`${slug}`}>
        <S.Title>
          {title}
        </S.Title>
      </Link>
      <S.StyledText>
        {intro?.intro}
      </S.StyledText>
    </S.Post>
  );
};

export default PreviewPost;