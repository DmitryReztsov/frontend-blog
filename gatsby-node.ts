import { GatsbyNode } from 'gatsby';

import loadAllBlogPostsQuery = Queries.loadAllBlogPostsQuery;

const path = require(`path`)

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/BlogPost.tsx`)
  const result = await graphql<loadAllBlogPostsQuery>(`
    query loadAllBlogPosts {
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
          }
          text {
            raw
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data?.allContentfulBlogPost.nodes.forEach((node) => {
    createPage({
      path: `/blog/${node.slug}/`,
      component: blogPostTemplate,
      context: node,
    })
  })
}