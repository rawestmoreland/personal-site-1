import React from "react"
import SEO from "./seo"
import Layout from "./layout"
import "animate.css/animate.min.css"
import "../styles/global.css"

import pdfSource from "../images/Resume_Mar_2022.pdf"

const ResumePage = () => {
  return (
    <div id="resume" className="resume-section">
      <iframe src={pdfSource} width="100%" height="100%"></iframe>
    </div>
  )
}

export default ResumePage
