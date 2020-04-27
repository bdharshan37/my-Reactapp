import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'
const Header = ({ siteTitle }) => (
 

  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../images/logo-designcode.svg')} width ="30"></img></Link>
      <Link to="/courses">Home</Link>
      <Link to="/Design">Design</Link>
      <Link to="/Research">Research</Link>
      <Link to="/contact"><button>contact</button></Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
