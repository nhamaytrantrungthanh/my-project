import {graphql} from "gatsby"
export const query = graphql`
fragment post on PrismicPost {
    uid
    data {
        title {
            text
        }
        thumbnail {
            url
            alt
        }
        category {
            document {
                ... on PrismicCategory {
                    data {
                        title {
                            text
                        }
                    }
                }
            }
        }
    }
}    
`