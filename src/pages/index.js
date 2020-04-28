import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />  
    <Header />       
    <div className="Hero">
      <div className="HeroGroup">
      <h1>Hye Hooman <br/> ......</h1>
      <p>I am a Interaction designer<br /> named as Baladharshan ;-p <br />considered to be a curious hooman being <br />  With 3 years of experience in <br /> [code] + [design] iN    2020  </p>
  <br />
      <Link to="/page-2/">Check My Projects</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
 