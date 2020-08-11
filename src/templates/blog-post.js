import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Pagination from "../components/pagination"
import SEO from "../components/seo"

import styles from "../styles/blog-post.module.css"

export default function BlogPost({ data, pageContext }) {
  const { next, previous } = pageContext
  const post = data.markdownRemark
  const { title, tags, tweet, type } = post.frontmatter
  const TagList = ({ tags }) => {
    const hasTags = tags && tags.length > 0
    const tagStr = hasTags ? tags.join(", ") : ""

    return hasTags ? (
      <span>
        Tags: <span className="p-category">{tagStr}</span>
      </span>
    ) : null
  }

  return (
    <Layout>
      <SEO description={post.excerpt} title={title} />
      <div className={`h-entry ${styles.postWrap}`}>
        <span className={`p-category ${styles.category}`}>{type}</span>
        <h1 className={`p-name ${styles.postTitle}`}>{title}</h1>
        {/* ToDo: Check and validate microformats */}
        <div
          className={`e-content ${styles.post}`}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <div className={styles.syncWrap}>
          <p>
            Publicado el{" "}
            <time className="dt-published" dateTime={post.frontmatter.date}>
              {post.frontmatter.date}
            </time>{" "}
            por{" "}
            <Link className="p-author h-card" to="/">
              Jos&eacute; Leiva
            </Link>
          </p>
          <p className={styles.meta}>
            <TagList tags={tags} />
            {tweet && (
              <span className={styles.sync}>
                Tambi&eacute;n en{" "}
                <a href={tweet} className="u-syndication">
                  Twitter
                </a>
              </span>
            )}
          </p>
        </div>

        {/* Used to publish content to Twitter using https://brid.gy */}
        {/* {postToTwitter && (
          <a href="https://brid.gy/publish/twitter" className={styles.hide}>
            brid.gy Post to Twitter
          </a>
        )} */}
      </div>

      <Pagination>
        {previous && (
          <li>
            <Link to={previous.fields.slug} rel="prev">
              ← Anterior
            </Link>
          </li>
        )}
        {next && (
          <li>
            <Link to={next.fields.slug} rel="next">
              Reciente →
            </Link>
          </li>
        )}
      </Pagination>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        title
        tags
        tweet
        type
      }
      excerpt
    }
  }
`
