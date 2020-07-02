import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "../styles/header.module.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="brand">
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          {siteTitle}
        </Link>
        <ul className={styles.list}>
          <li>
            <a href="/blog" className={styles.action}>
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
