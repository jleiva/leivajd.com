import React from "react"

import styles from "../styles/footer.module.css"

const Footer = () => (
  <footer>
    <small>
      Desarrollo y contenido por Jos&eacute; David Leiva{" "}
      <span className={styles.date}>2012 - {new Date().getFullYear()}</span>
    </small>
  </footer>
)

export default Footer
