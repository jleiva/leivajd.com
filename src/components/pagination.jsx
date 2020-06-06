import React from "react"

import styles from "../styles/pagination.module.css"

const Pagination = ({ children }) => (
  <ul className={styles.pager}>{children}</ul>
)

export default Pagination
