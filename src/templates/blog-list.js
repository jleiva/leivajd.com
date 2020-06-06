import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/home.module.css"

export default ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1
      ? "/blog"
      : `/blog/pagina/${(currentPage - 1).toString()}`
  const nextPage = `blog/pagina/${(currentPage + 1).toString()}`

  return (
    <Layout>
      <SEO title="Inicio" />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div className={styles.post} key={node.id}>
          <h3 className={styles.postTitle}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </h3>
          <time className="dtPublished">{node.frontmatter.date}</time>
          <div
            className={styles.article}
            dangerouslySetInnerHTML={{ __html: node.html }}
          />
        </div>
      ))}

      <ul>
        {!isFirst && (
          <Link to={prevPage} rel="prev">
            ← Previous Page
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <li key={`pagination-number${i + 1}`}>
            <Link to={`/${i === 0 ? "" : i + 1}`}>{i + 1}</Link>
          </li>
        ))}
        {!isLast && (
          <Link to={nextPage} rel="next">
            Next Page →
          </Link>
        )}
      </ul>
    </Layout>
  )
}
export const query = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { isDraft: { ne: true } } }
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
