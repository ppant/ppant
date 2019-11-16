import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Working on contents for my new site on fitness, health, spoprts, nutrition, travel etc</p>
    <p>More to come .. stay tuned</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="http://pradeeppant.com">Link to my Tech blog</Link>
  </Layout>
)

export default IndexPage
