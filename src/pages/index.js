import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO title="Inicio" />
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="post" key={node.id}>
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
  query indexPageQuery {
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}, 
      limit: 10, 
      filter: {frontmatter: {isDraft: {ne: true}}}
      ) {
      edges {
        node {
          id
          html
          frontmatter {
            date(formatString: "DD-MM-YYYY")
            path
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`