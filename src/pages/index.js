import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Inicio" />
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h2>
              {node.frontmatter.title}{" "}
              <span>
                — {node.frontmatter.date}
              </span>
            </h2>
            <div
              className="article__body"
              dangerouslySetInnerHTML={{ __html: node.html }}
            />
          </div>
        ))}
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          html
          frontmatter {
            date(formatString: "DD-MM-YYYY")
            path
            title
          }
        }
      }
    }
  }
`