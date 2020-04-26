import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
      <h1>Hye Hooman</h1>
      <p>I am a Interaction designer + a curious hooman being With 3 years of experience in [code] + [design]   </p>
     
      <Link to="/page-2/">Check My Projects</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
 