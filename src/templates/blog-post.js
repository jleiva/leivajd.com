import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Pagination from "../components/pagination"

import styles from "../styles/blog-post.module.css"

export default function BlogPost({ data, pageContext }) {
  const post = data.markdownRemark
  const { next, previous } = pageContext

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      {/* ToDo: 
        1. Missing attr datetime
        2. Add itemprop to post
      */}
      <time className="dtPublished">{post.frontmatter.date}</time>
      <div
        className={styles.post}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
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
      }
    }
  }
`
