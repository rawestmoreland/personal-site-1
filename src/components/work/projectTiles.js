import React from "react"
import styles from './styles/tile.module.css'

const ProjectTiles = props => {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        <div className="projects">
          <div className="project">
            <div className="project-inner">
              <header>
                  <h4 className={styles.title}>
                    {props.title}
                  </h4>
                  <div className={styles.description}>
                    <p>
                      {props.description}
                    </p>
                  </div>
              </header>
              <footer>
                <div className={styles.technologies}>
                  <ul>
                    <li>Flutter</li>
                    <li>Firebase</li>
                  </ul>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectTiles
