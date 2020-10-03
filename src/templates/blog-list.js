import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Pagination from "../components/pagination"
import SEO from "../components/seo"
import PostLink from "../components/post-link"
import PostNote from "../components/post-note"

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
  // TODO: Cleanup, move to component
  const handlePostComp = node => {
    const postType = node.frontmatter.type

    switch (postType) {
      case "recordar":
        return <PostLink {...node} />

      case "note":
        return <PostNote {...node} />

      default:
        return (
          <>
            <h3 className={`p-name ${styles.postTitle}`}>
              <Link to={node.fields.slug} className="u-url" rel="bookmark">
                {node.frontmatter.title}
              </Link>
            </h3>
            <div className={styles.metadata}>
              <time className="dt-published" dateTime={node.frontmatter.date}>
                {node.frontmatter.date}
              </time>
            </div>
            <div
              className={`e-content ${styles.article}`}
              dangerouslySetInnerHTML={{ __html: node.html }}
            />
          </>
        )
    }
  }

  return (
    <Layout>
      <SEO
        title="Blog"
        description="Notas sobre front-end de José Leiva, un web developer que vive en San José, Costa Rica."
      />

      <div className={`h-feed hfeed ${styles.block}`}>
        <h1 className="p-name">Document your stuff</h1>
        <p className="p-summary">
          Este espacio es un reflejo{" "}
          <a href="https://indieweb.org/principles">del principio</a>{" "}
          <em>Document your stuff</em> de{" "}
          <a href="https://indieweb.org/">IndieWeb</a>; un espacio que me sirve
          para documentar y darle seguimiento a lo que voy aprendiendo.
          Aqu&iacute; vas a encontrar notas sobre front-end, enfocado en HTML,
          CSS y accesibilidad, entre otras cosas; te pod&eacute;s suscribir al{" "}
          <Link to="/rss.xml">
            <strong>RSS feed</strong>
          </Link>
          .
        </p>
      </div>

      <div className={styles.feedWrap}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const isNote = node.frontmatter.type === "note"

          return (
            <div
              className={`h-entry hentry ${isNote ? styles.note : styles.post}`}
              key={node.id}
            >
              {handlePostComp(node)}
            </div>
          )
        })}
      </div>

      <Pagination>
        {!isFirst && (
          <Link to={prevPage} rel="prev">
            ← Reciente
          </Link>
        )}

        {!isLast && (
          <Link to={nextPage} rel="next">
            Anterior →
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
            date
            path
            title
            type
            tweet
            runLog
            externalUrl
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
