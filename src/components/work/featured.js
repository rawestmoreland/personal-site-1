import React from "react"
import styles from "./styles/featured.module.css"

const Featured = props => (
  <div className={styles.featuredContainer}>
    <div className={styles.featured}>
      <div className={styles.contentContainer}>
        <h4 className={styles.featuredTitle}>{props.title}</h4>
        <div className={styles.projectDescription}>
          <div className={styles.projectDescriptionInner}>
            <p>
              {props.description}
            </p>
          </div>
        </div>
        <ul className={styles.technologies}>
          {props.tech.map((i) => {
            return <li>{i}</li>
          })}
        </ul>
      </div>
        <a
          className={styles.featuredImageContainer}
          target="_blank"
          rel="noopener noreferrer"
          href={props.link}
        >
          <img src={props.image} alt="keg track samples" />
        </a>
    </div>
  </div>
)

export default Featured
