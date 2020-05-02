import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'

class Header extends React.Component{
constructor(props){
super(props)

this.state = {
  hasScrolled: false

  }
}

  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll)
  }

  handleScroll = (event) =>{
    const scrollTop= window.pageYOffset

    if(scrollTop > 50)
    {
      this.setState({hasScrolled:true})
    }
    else
    {
    this.setState({hasScrolled:false})
    }
  
  }



  render() {
      return(
        <div className={this.state.hasScrolled ? ' Header HeaderScrolled': 'Header'}>
          <div className="HeaderGroup">
            <Link to="/"><img src={require('../images/logo-designcode.svg')} width ="30"></img></Link>
           <Link to="/courses">Home</Link>
        <Link to="/Design">Design</Link>
        <Link to="/Research">Research</Link>
        <Link to="/contact"><button>contact</button></Link>
    </div>
  </div>
    )
  }
}
    
  
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}



export default Header
