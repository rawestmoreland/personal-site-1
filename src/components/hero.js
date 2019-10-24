import React, { useEffect, useState } from "react"
import logo from "../images/logo.svg"
import posed from "react-pose"
import "../styles/global.css"

const LinkList = props => {
  return (
    <li>
      <a href={`#${props.title}`}>{props.title}</a>
    </li>
  )
}

const Left = posed.div({
  enter: {
    x: "0%",
    opacity: 1,
    delay: 300,
    transition: {
      default: { duration: 500 },
    },
  },
  exit: {
    x: "-100%",
    opacity: 0,
  },
})

const Right = posed.div({
  enter: {
    x: "0%",
    opacity: 1,
    delay: 300,
    transition: {
      default: { duration: 500 },
    },
  },
  exit: {
    x: "200%",
    opacity: 0,
  },
})

const Up = posed.div({
  enter: {
    y: "0%",
    opacity: 1,
    delay: 1500,
    transition: {
      default: { duration: 500 },
    },
  },
  exit: {
    y: 50,
    opacity: 0,
  },
})

const Hero = () => {
  useEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }, 1000)
  }, [])

  const [visible, setVisible] = useState(false)

  return (
    <section id="home" className="hero-section justify-content-md-center">
      <Left className="logo" pose={!visible ? "exit" : "enter"}>
        <img className="logo" src={logo} alt="logo" />
      </Left>
      <Right pose={!visible ? "exit" : "enter"}>
        <h1>Richard Westmoreland</h1>
      </Right>
      <Left pose={!visible ? "exit" : "enter"}>
        <nav id="hero-nav" className="hero-nav">
          <ul>
            <LinkList title="about" />
            <LinkList title="work" />
            <LinkList title="contact" />
            <LinkList title="resume" />
          </ul>
        </nav>
      </Left>
      <Up pose={!visible ? "exit" : "enter"}>
        <p>
          I'm a web developer based in Houston, Texas. I build high quality,
          responsive websites and applications
        </p>
      </Up>
      <Right pose={!visible ? "exit" : "enter"}>
        <a href="mailto:rawestmoreland@gmail.com">
          <button>
            Say Hello
          </button>
        </a>
      </Right>
    </section>
  )
}

export default Hero
