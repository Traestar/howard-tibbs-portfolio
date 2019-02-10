import React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types'


import HLTLogo from '../images/HLTLogov1_Final.png'

const isActive = ({ isCurrent }) => {
  return { className: isCurrent ? 'active' : 'navlink' }
}

const NavLink = props => <Link getProps={isActive} {...props} />

class Header extends React.Component {

  render() {
    // const { siteTitle } = this.props

  return (
      <div
        data-collapse="medium" 
        data-animation="over-right" 
        data-duration="400" 
        data-easing="ease-in" 
        data-easing2="ease-out" 
        data-w-id="6cdd0ab2-68cb-38b3-e823-4e4748267e96" 
        classNameName="navigation-bar dark w-nav"
        /* style={{
          background: `rebeccapurple`,
          marginBottom: `1.45rem`,
        }} */
      >
        <div
          /* data-collapse="medium" 
          data-animation="over-right" 
          data-duration="400" 
          data-easing="ease-in" 
          data-easing2="ease-out" 
          data-w-id="6cdd0ab2-68cb-38b3-e823-4e4748267e96" 
          classNameName="navigation-bar dark w-nav" */
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
        {/* Title / Logo */}
        <span style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={HLTLogo}
          alt="Howard Tibbs Logo"
          className="brand-link left-spacing w-nav-brand"
          style={{
            margin: '0 5px',
            width: '80px',
          }}
        />
          {/* <h1 style={{ margin: 0 }}>
            <NavLink to="/" style={{ color: `white`, textDecoration: `none` }}>{siteTitle}</NavLink>
            </h1> */}
          </span>
          <NavLink to="#about" className="navigation-link white w-nav-link"> About </NavLink>
          <NavLink to="#experience" className="navigation-link white w-nav-link">Experience</NavLink>
          <NavLink to="#projects" className="navigation-link white w-nav-link">Projects</NavLink>
          <NavLink to="#blog" className="navigation-link white w-nav-link"> Blog </NavLink>
          <NavLink to="#contact" className="navigation-link white w-nav-link">Contact</NavLink>
          <div className="hamburger-button white w-nav-button">
            <div className="w-icon-nav-menu"></div>
          </div>
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


  