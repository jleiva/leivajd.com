import { Link } from "gatsby"
import React from "react"

import styles from "../styles/footer.module.css"

const getHappyDay = () => {
  const date = new Date()
  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ]

  return `¡Feliz ${days[date.getDay()]}!`
}

const Footer = () => (
  <footer className={styles.wrap}>
    <p className={styles.copy}>
      Desarrollo y contenido por Jos&eacute; David Leiva{" "}
      <span className={styles.date}>
        Si encontras un error, te agredezco el{" "}
        <a href="https://github.com/jleiva/leivajd.com/issues">reporte</a>.
      </span>
      <span className={styles.date}>
        2012 - {new Date().getFullYear()} /{" "}
        <Link to="/rss.xml">
          <strong>RSS</strong>
        </Link>
      </span>
    </p>

    <p className={styles.hey}>{getHappyDay()}</p>
  </footer>
)

export default Footer
