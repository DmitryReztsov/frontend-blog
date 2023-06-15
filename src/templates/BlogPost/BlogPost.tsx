import React from 'react';
import { PageProps } from 'gatsby';
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { Options } from '@contentful/rich-text-react-renderer';

import * as S from './styles';

import { Title1 } from '@style/components/title';
import BaseLayout from '@layouts/BaseLayout';
import SiteContainer from '@components/SiteContainer/SiteContainer';
import Code from '@uikit/Code/Code';
import GoBackButton from '@components/utils/GoBackButton/GoBackButton';
import Divider from '@uikit/Divider/Divider';
import Chip from '@uikit/Chip/Chip';

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <S.Bold as={'span'}>{text}</S.Bold>,
    [MARKS.CODE]: (text) => <S.Code>{text as string}</S.Code>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (
        node.content.length === 1 &&
        node.content[0]?.marks[0]?.type === 'code'
      ) {
        return <div><Code>{node.content[0].value}</Code></div>;
      }
      return <S.CommonText>{children}</S.CommonText>
    },
    [BLOCKS.HEADING_2]: (node, children) => <S.Heading2>{children}</S.Heading2>,
    [BLOCKS.HEADING_3]: (node, children) => <S.Heading3>{children}</S.Heading3>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { gatsbyImageData } = node.data.target
      if (gatsbyImageData) {
        return <S.ImageWrapper><GatsbyImage image={gatsbyImageData} alt={''} /></S.ImageWrapper>
      }
      return null;
    },
    [INLINES.HYPERLINK]: ({ data }, children) => <S.Link to={data.uri}>{children}</S.Link>
  },
}

const BlogPost = ({ pageContext }: PageProps<any, Queries.ContentfulBlogPost>) => {
  const { title, author, createdAt, previewImg, text, tags, intro } = pageContext;
  const image = getImage(previewImg!.gatsbyImageData)
  return (
    <BaseLayout>
      <SiteContainer>
        <S.Content>
          <S.Back>
            <GoBackButton to={'/blog'} />
          </S.Back>
          <Title1>{title}</Title1>
          <S.Author>
            {`${author}, published ${new Date(Date.parse(createdAt || '')).toLocaleString("en-US")}`}
          </S.Author>
          <S.Image
            image={image!}
            alt={'data.blogPost.author'}
          />
          <S.CommonText>
            {intro?.intro}
          </S.CommonText>
          {text && renderRichText(text, options)}
          <S.DividerContainer>
            <Divider />
          </S.DividerContainer>
          {!!tags?.length && (
            <S.TagsContainer>
              {tags.map((tag) => <Chip key={tag}>{tag}</Chip>)}
            </S.TagsContainer>)
          }
        </S.Content>
      </SiteContainer>
    </BaseLayout>
  );
};

export default BlogPost;