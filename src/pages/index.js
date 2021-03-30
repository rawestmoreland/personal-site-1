import React, { Component } from "react"
import "animate.css/animate.min.css"
import "../styles/global.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Work from "../components/work/work"
import Contact from "../components/contact/contact"
import Resume from "../components/resume"
class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div id="main" className="container-fluid text-center-md">
          <Hero />
          <About />
          <Work />
          <Contact />
          <Resume />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
