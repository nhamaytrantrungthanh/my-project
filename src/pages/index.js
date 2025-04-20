import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {
        data.allPrismicPost.nodes?.map(({data,uid}, index) => (
        <article key={index}>
          <h2>{data.category.data.title.text}</h2>
          <img src={data.thumbnail.url} alt={data.thumbnail.alt} />
          <h1>
              <Link to={'/post/' + uid}>{data.title.text}</Link>
          </h1>
        </article>

        ))
      }
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query queryAllPost {
    allPrismicPost {
        nodes {
            ...post
        } 
  }
}
`;
