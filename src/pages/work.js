import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

import styles from "../styles/work.module.css"

const WorkPage = () => (
  <>
    <SEO
      title="José Leiva - Work"
      description="leivajd.com is the website of José Leiva, Lord Webmaster of the Kingsguard, living in San José, Costa Rica."
    />
    <div className={styles.wrap}>
      <h1>
        <Link to="/">leivajd.com</Link> / work
      </h1>
      <p>
        Hey! My name is Jos&eacute; and{" "}
        <span title="Lord Webmaster of the Kingsguard">I make websites.</span>I
        consider myself to be extremely fortunate, because my "job", simply
        entails doing what I love; executing my ideas through code.
      </p>

      <p>
        Currently I work closely with UX designers, product managers, and
        engineers to build stellar user interfaces for{" "}
        <a className={styles.ccLink} href="https://www.competitivecyclist.com/">
          Competitive Cyclist
        </a>
        , an online specialty retailer of road and mountain bikes, components,
        apparel, and accessories.
      </p>

      <p>
        As a <em>side project</em>, I collaborate at{" "}
        <abbr title="Centro de Tecnolog&iacute;a y Artes Visuales">
          <a
            className={styles.cetavLink}
            href="http://www.parquelalibertad.org/cetav/"
          >
            CETAV
          </a>
        </abbr>
        , an NGO where I teach and give mentoring to underprivileged young
        people who are learning front end technologies. As part of the teaching
        process, we develop projects for real clients, you can{" "}
        <a href="https://github.com/cetav-ddw">take a look here</a>.
      </p>

      <h2>Contact & elsewhere</h2>

      <ul>
        <li>
          <strong>Twitter:</strong>{" "}
          <a href="https://twitter.com/leivajd">@leivajd</a>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/jleiva">https://github.com/jleiva</a>
        </li>
        <li>
          <strong>Drupal user:</strong>{" "}
          <a href="https://www.drupal.org/user/634642">
            drupal.org/user/634642
          </a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a href="https://cr.linkedin.com/in/leivajd">
            https://cr.linkedin.com/in/leivajd
          </a>
        </li>
      </ul>
      <p>I am based in San José, Costa Rica.</p>
    </div>
    <footer>
      <small>
        I know, I know, you're unimpressed with my website, but I'm busy
        building things for money and teaching people; plus{" "}
        <a href="https://www.instagram.com/p/Bhj5S9anNcqK1GEHL2phmshLxBCmhH9bApgPaU0/">
          I like to cook
        </a>{" "}
        for my family and friends :)
      </small>
    </footer>
  </>
)

export default WorkPage
