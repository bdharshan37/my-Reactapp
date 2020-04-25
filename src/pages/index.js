import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hey this is my new portfolio</h1>
    <p>I am a User Experience designer</p>
    <p>With 3 years of experience</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Check My Projects</Link>
  </Layout>
)

export default IndexPage
 