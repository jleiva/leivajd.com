import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/home.module.css"

export default ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO title="Inicio" />
      <aside>
        <p className={styles.intro}>
          ¡Hey! Esta es la casa <em>online</em> de{" "}
          <Link to="/work">Jos&eacute; Leiva</Link>, un web designer que vive en
          San Jos&eacute;, Costa Rica.
        </p>
      </aside>

      <div className={styles.block}>
        <h2>Del blog.</h2>
        <p>
          Algunas notas y links que voy recopilando; te podes suscribir al{" "}
          <Link to="/rss.xml">
            <strong>RSS feed</strong>
          </Link>
          .
        </p>
      </div>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div className={styles.post} key={node.id}>
          <h3 className={styles.postTitle}>
            {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
          </h3>
          <div
            className={styles.article}
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
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
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
