import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import Card from "../components/card"
import Section from "../components/Section"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />  
    <Header />       
    <div className="Hero">
      <div className="HeroGroup">
      <h1>Hye Hooman <br/> ......</h1>
      <p>I am a Interaction designer<br /> named as Baladharshan ;-p <br />a curious hooman being <br />  With 3 years of experience in <br /> [code] + [design] iN    2020  </p>
      <br />
            <Link to="/page-2/">Check My Projects</Link>
            <svg width="100%" height="200" viewBox="0 0 100% 172" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path  fill="white">
            <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s"
            values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

            M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;

            M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;

            M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
            
            "/>
          </path>
        </svg>
      </div>
      </div>
     <div className="Cards">
       <h2> Kill-Bill case studies coming soon</h2>

      <div className="CardGroup"> 
        <Card 
        title="The blood splattered bride"
        text= "Chapter 1"
        image={require('../images/8.jpg')} />
        
        <Card 
        title="The lonely grave of Paula Schulz"
        text= "Chapter 2"
        image={require('../images/10.jpg')} />
        
        <Card 
        title="Massacre at Two Pines"
        text= "Chapter 3"
        image={require('../images/3.jpg')} />
        
        <Card 
        title="The Whole Bloody Affair."
        text= "Chapter 4"
        image={require('../images/5.jpg')} />
        
        </div>
        <Section
  image={require('../images/wallpaper2.jpg')}
  logo={require('../images/logo-react.png')}
  title="React for Designers"
  text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify." />
      </div> 
        
   </Layout>
)

export default IndexPage
 




