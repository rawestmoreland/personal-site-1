import React, { Component } from "react"
import "animate.css/animate.min.css"
import "../styles/global.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Work from "../components/work/work"
import Contact from "../components/contact/contact"

// var prevScrollpos = window.pageYOffset
// var navHeight

// window.onscroll = function() {
//   navHeight = document.getElementById("page-header").offsetHeight
//   var currentScrollPos = window.pageYOffset
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("page-header").style.transform = "translateY(0)"
//     document.getElementById("page-header").style.boxShadow =
//       "rgba(2, 12, 27, 0.7) 0px 10px 30px -10px"
//     this.setTimeout(() => {
//       document.getElementById("page-header").style.boxShadow = "none"
//     }, 1000)
//   } else {
//     document.getElementById("page-header").style.transform =
//       "translateY(-" + navHeight + "px)"
//   }
//   prevScrollpos = currentScrollPos
// }

// setInterval(() => {
//   if (window.pageYOffset === 0) {
//     document.getElementById("page-header").style.boxShadow = "none"
//     document.getElementById("page-header").style.transform =
//       "translateY(-" +
//       document.getElementById("page-header").offsetHeight +
//       "px)"
//   }
// }, 250)

class IndexPage extends Component {

  // handleScroll = () => {
  //   const { prevScrollpos } = this.state

  //   const currentScrollPos = window.pageYOffset
  //   const visible = prevScrollpos > currentScrollPos

  //   this.setState({
  //     prevScrollpos: currentScrollPos,
  //     scolling: visible,
  //   })

  //   console.log(window.pageYOffset)
  // }

  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll)
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll)
  // }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div id="main" className="container-fluid text-center-md">
          <Hero />
          <About />
          <Work />
          <Contact />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
