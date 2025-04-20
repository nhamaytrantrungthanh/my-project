import { graphql } from "gatsby";
export const query = graphql`
  fragment post on PrismicPost {
    uid
     data {
        description {
            text
        } 
        title {
            text
        }
     }
  }
`;
