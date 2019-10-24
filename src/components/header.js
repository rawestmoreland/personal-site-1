import PropTypes from "prop-types"
import React, { Component } from "react"
import {window} from 'browser-monads'
import logo from "../images/logo.svg"

class Header extends Component {

  constructor(props) {
    super(props)

    this.state = {
      prevScrollpos: window.pageYOffset,
      scrolling: false
    }
  }

  handleScroll = () => {

    const currentScrollPos = window.pageYOffset
    const visible = this.state.prevScrollpos > currentScrollPos

    this.setState({
      prevScrollpos: currentScrollPos,
      scrolling: visible,
    })

  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    console.log("mount")
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
    console.log("unmount")
  }

  render() {
    const change1 = this.props.change1
    const toggleNav = this.props.toggleNav
    return (
      <header id="page-header" className={`nav-container sticky-top page-header ${!this.state.scrolling || this.state.prevScrollpos === 0 ? "" : "nav-down"} ${change1 ? "no-box" : ""}`}>
        <nav className="navbar navbar-expand-md top-nav">
          <a className="navbar-brand" href="#home">
            <img src={logo} alt="logo"></img>
          </a>
          <button className={`menu-button navbar-toggler ${change1 ? "change1" : ""}`} onClick={toggleNav}>
            <div className="menu-top"></div>
            <div className="menu-middle"></div>
            <div className="menu-bottom"></div>
          </button>
          <div className={`collapse navbar-collapse justify-content-end`}>
            <ul className="navbar-nav navbar-right">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  about
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work">
                  work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.richardawestmoreland.com/resume.pdf" target="_blank"
          rel="noopener noreferrer">
                  resume
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className={`mobile-nav ${change1 ? "expanded-nav" : ""}`}>
          <div className="mobile-nav-wrapper">
            <nav className="mobile-nav-links">
              <ul>
                <li><a onClick={toggleNav} href="#about">about</a></li>
                <li><a onClick={toggleNav} href="#work">work</a></li>
                <li><a onClick={toggleNav} href="#contact">contact</a></li>
                <li><a onClick={toggleNav} href="https://www.richardawestmoreland.com/resume.pdf" target="_blank"
          rel="noopener noreferrer">resume</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }

  
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
