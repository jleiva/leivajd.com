import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/home.module.css"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Inicio" />
      <aside className={`${styles.block} h-card`}>
        <p className={styles.intro}>
          ¡Hey!{" "}
          <a href="https://leivajd.com/" className="u-url u-uid">
            Esta
          </a>{" "}
          es la casa <em>online</em> de{" "}
          <span className="p-name">Jos&eacute; Leiva</span>, un{" "}
          <span className="p-job-title">web designer</span> que vive en{" "}
          <span className="p-region">San Jos&eacute;</span>,{" "}
          <span className="p-country-name">Costa Rica</span>.
        </p>

        <h2>En otras partes</h2>

        <ul className={styles.items}>
          <li>
            <a href="https://twitter.com/leivajd" className="u-url" rel="me">
              @leivajd
            </a>
          </li>
          <li>
            <a href="https://github.com/jleiva" className="u-url" rel="me">
              https://github.com/jleiva
            </a>
          </li>
          <li>
            <a
              href="https://www.drupal.org/user/634642"
              className="u-url"
              rel="me"
            >
              drupal.org/user/634642
            </a>
          </li>
          <li>
            <a
              href="https://cr.linkedin.com/in/leivajd"
              className="u-url"
              rel="me"
            >
              https://cr.linkedin.com/in/leivajd
            </a>
          </li>
        </ul>
      </aside>

      <div className={styles.block}>
        <h2>
          Del <Link to="/blog">blog</Link>
        </h2>
        <p>
          Algunas notas y links que voy recopilando; te pod&eacute;s suscribir
          al{" "}
          <Link to="/rss.xml">
            <strong>RSS feed</strong>
          </Link>
          .
        </p>
      </div>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div className={styles.post} key={node.id}>
          <h3 className={styles.postTitle}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </h3>
          <div className={styles.metadata}>
            <time className="dtPublished">{node.frontmatter.date}</time>
          </div>
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
