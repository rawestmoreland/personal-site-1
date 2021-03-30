import React from "react"
import SEO from "./seo"
import Layout from "./layout"
import "animate.css/animate.min.css"
import "../styles/global.css"

import pdfSource from "../images/resume_march_2021.pdf"

const ResumePage = () => {
  return (
    <Layout>
      <SEO title="Resume" />
      <div id="resume" className="resume-section">
        <iframe src={pdfSource} width="100%" height="100%"></iframe>
      </div>
    </Layout>
  )
}

export default ResumePage
