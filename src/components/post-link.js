import React from "react"

import styles from "../styles/post-link.module.css"

const PostLink = ({ fields, frontmatter, html }) => {
  return (
    <div className="e-content">
      <h3>
        <a
          className={`p-name u-bookmark-of h-cite ${styles.external}`}
          href={frontmatter.externalUrl}
        >
          {frontmatter.title}
        </a>
      </h3>
      <div className={styles.metadata}>
        <time className="dt-published" dateTime={frontmatter.date}>
          {frontmatter.date}
        </time>
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}

export default PostLink
