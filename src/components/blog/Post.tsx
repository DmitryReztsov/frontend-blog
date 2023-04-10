import React, { FC } from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

interface PostProps {
  post: Queries.ContentfulBlogPost,
}

const Post: FC<PostProps> = ({ post }) => {
  const image = getImage(post.previewImg!.gatsbyImageData)
  console.log(image)
  return (
    <div>
      <GatsbyImage image={image!} alt={'data.blogPost.author'} />
    </div>
  );
};

export default Post;