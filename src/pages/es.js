import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/home.module.css"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Inicio" />
      <aside className={styles.block}>
        <p className={styles.intro}>
          ¡Hey! Esta es la casa <em>online</em> de{" "}
          <Link to="/work">Jos&eacute; Leiva</Link>, un web designer que vive en
          San Jos&eacute;, Costa Rica.
        </p>
      </aside>

    </Layout>
  )
}
