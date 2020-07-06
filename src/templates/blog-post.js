import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Pagination from "../components/pagination"
import SEO from "../components/seo"

import styles from "../styles/blog-post.module.css"

export default function BlogPost({ data, pageContext }) {
  const post = data.markdownRemark
  const tags = post.frontmatter.tags
  const { next, previous } = pageContext
  const postTitle = post.frontmatter.title

  return (
    <Layout>
      <SEO title={postTitle} />
      <div className="h-entry">
        <h1 className={`p-name ${styles.postTitle}`}>{postTitle}</h1>
        {/* ToDo: 
          1. Missing attr datetime
          2. Add itemprop to post
        */}
        <div className={styles.metadata}>
          <time className="dt-published">{post.frontmatter.date}</time>
          <span className={`p-category ${styles.tags}`}>
            {tags.length ? `Tags: ${tags.join(", ")}` : ""}
          </span>
        </div>
        <div
          className={`e-content ${styles.post}`}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
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
        date(formatString: "DD-MM-YYYY")
        title
        tags
      }
    }
  }
`
