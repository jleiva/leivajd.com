import React from "react"

import styles from "../styles/post-note.module.css"

const PostNote = ({ fields, frontmatter, html }) => {
  return (
    <>
      <div className={styles.metadata}>
        <p>
          Publicado el{" "}
          <a href={fields.slug} className="u-url" rel="bookmark">
            <time className="dt-published" dateTime={frontmatter.date}>
              {frontmatter.date}
            </time>
          </a>{" "}
          {frontmatter.tweet && (
            <span className={styles.sync}>
              en{" "}
              <a href={frontmatter.tweet} className="u-syndication">
                Twitter
              </a>
            </span>
          )}
          {frontmatter.runLog && (
            <span className={styles.sync}>
              / <a href={frontmatter.runLog}>Strava</a>
            </span>
          )}
        </p>
      </div>
      <div
        className={`e-content ${styles.content}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <footer>
        <a className={`h-card u-url ${styles.hide}`} href="/">
          <span className="p-name">Jos&eacute; Leiva</span>
        </a>
      </footer>
    </>
  )
}

export default PostNote
