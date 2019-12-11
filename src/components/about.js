import React from "react"

const About = props => {
  return (
    <section id="about" className="about-section">
      <h1>About Me</h1>
      <p>
        Hi there. I’m a full stack web developer in Houston, Texas and I love
        working with clients to bring their ideas to the internet. I strive to
        build high-quality, responsive websites, web apps, and mobile
        applications that incorporate fast and scalable backends.
      </p>
      <p className="currently">Currently working with...</p>
      <ul className="skills-list">
        <li>JavaScript</li>
        <li>React.js</li>
        <li>HTML & (S)CSS</li>
        <li>Wordpress</li>
        <li>Flutter / Dart</li>
        <li>Node.js</li>
      </ul>
    </section>
  )
}

export default About
