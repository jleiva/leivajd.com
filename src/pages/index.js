import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/post-link"
import PostNote from "../components/post-note"

import styles from "../styles/home.module.css"
import headshot from "../images/headshot.jpg"

export default ({ data }) => {
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
      <SEO title="Inicio" />
      <aside className={`${styles.block} h-card`}>
        <p className={styles.intro}>
          {/* TODO add srcset and size attr */}
          <img src={headshot} className={`u-photo ${styles.headshot}`} alt="" />
          ¡Hey!{" "}
          <a href="https://leivajd.com/" className="u-url u-uid">
            Esta
          </a>{" "}
          es la casa <em>online</em> de{" "}
          <span className="p-name">Jos&eacute; Leiva</span>, un{" "}
          <span className="p-job-title">web designer</span> que vive en{" "}
          <span className="p-region">San Jos&eacute;</span>,{" "}
          <span className="p-country-name">Costa Rica</span>.{" "}
          <span className="p-note">
            Actualmente trabajo para{" "}
            <a href="https://www.backcountry.com/">Backcountry.com</a> como full
            snack developer. Me gusta cocinar, leer y escuchar podcasts.
          </span>
        </p>

        <h2>En otras partes</h2>

        <ul className={styles.items}>
          <li>
            <a href="https://twitter.com/leivajd" className="u-url" rel="me">
              twitter.com/leivajd
            </a>
          </li>
          <li>
            <a href="https://github.com/jleiva" className="u-url" rel="me">
              github.com/jleiva
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
              linkedin.com/in/leivajd
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/leivajd/"
              className="u-url"
              rel="me"
            >
              instagram.com/leivajd/
            </a>
          </li>
        </ul>
      </aside>

      <div className={`h-feed hfeed ${styles.feedWrap}`}>
        <div className={styles.block}>
          <h2 className="p-name">
            Del <Link to="/blog">blog</Link>
          </h2>
          <p className="p-summary">
            Algunas notas y links que voy recopilando; te pod&eacute;s suscribir
            al{" "}
            <Link to="/rss.xml">
              <strong>RSS feed</strong>
            </Link>
            .
          </p>
        </div>
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

        <div className={styles.ring}>
          <a href="https://xn--sr8hvo.ws/%F0%9F%98%9C%F0%9F%8F%AE%F0%9F%92%86/previous">
            ←
          </a>
          <small>An IndieWeb Webring 🕸💍</small>
          <a href="https://xn--sr8hvo.ws/%F0%9F%98%9C%F0%9F%8F%AE%F0%9F%92%86/next">
            →
          </a>
        </div>
      </div>
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
