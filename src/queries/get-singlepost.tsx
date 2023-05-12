import { gql } from "@apollo/client";
export const GET_Singlepost = gql`
query MyQuery($slug:String) {
postBy(slug: $slug) {
    link
    title
    slug
    excerpt
    uri
    featuredImage {
      node {
        sourceUrl
        
      }
    }
}
  }`