import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Pagination from "../components/pagination"
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
      <SEO
        title="Blog"
        description="Notas sobre front-end de José Leiva, un web developer que vive en San José, Costa Rica."
      />

      <div className={styles.block}>
        <h1>
          <em>Document your stuff</em>
        </h1>
        <p>
          Me gusta pensar que este espacio es un reflejo{" "}
          <a href="https://indieweb.org/principles">del principio</a> de{" "}
          <a href="https://indieweb.org/">IndieWeb</a>; un espacio que me sirve
          para documentar lo que voy aprendiendo. Aqu&iacute; vas a encontrar
          notas sobre front-end, enfocado en HTML, CSS, accesibilidad, entre
          otras cosas; te pod&eacute;s suscribir al{" "}
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

      <Pagination>
        {!isFirst && (
          <Link to={prevPage} rel="prev">
            ← Anterior
          </Link>
        )}

        {!isLast && (
          <Link to={nextPage} rel="next">
            Reciente →
          </Link>
        )}
      </Pagination>
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
