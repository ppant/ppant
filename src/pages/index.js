import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>This is my brand new site on Fitness, Health, Sports, Nutrition, Travel etc. </p>
    <p>Stay Tuned</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>Meanwhile you can check my Tech Blog <Link to="https://pradeeppant.com">Here</Link>
    </p>
  </Layout>
)

export default IndexPage
