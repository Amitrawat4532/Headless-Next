import { gql } from "@apollo/client";
export const GET_POSTS = gql`
query MyQuery {
    posts {
      nodes {
        excerpt
        title
        content
        slug
        id
        link
        featuredImage {
          node {
            sourceUrl
            link
        date
            
          }
        }
      }
    }
}`