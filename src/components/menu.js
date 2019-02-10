import React from "react"
import { Link } from "gatsby"




const Menu = () => {
    return (
          <ul>
            <li>
              <Link to="/" style={{
                color: `white`,
                textDecoration: `none`,
              }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="#about" style={{
                color: `white`,
                textDecoration: `none`,
              }}>
                About
              </Link>
            </li>
            <li>
              <Link to="#experience" style={{
                color: `white`,
                textDecoration: `none`,
              }}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="#projects" style={{
                color: `white`,
                textDecoration: `none`,
              }}>
                  Projects
              </Link>
            </li>
            <li>
              <Link to="#blog" style={{
                color: `white`,
                textDecoration: `none`,
              }}>
                  Blog
              </Link>
            </li>
            <li>
              <Link to="#contact" style={{
                color: `white`,
                textDecoration: `none`,
              }}>
                Contact
              </Link>
            </li>
          </ul>
    )
  }
  
  export default Menu


/*export default props => (
    <div>


    <a href="#about" className="navigation-link white w-nav-link">About</a>
    <a href="#experience" className="navigation-link white w-nav-link">Experience</a>
    <a href="#experience" className="navigation-link white w-nav-link">Projects</a>
    <a href="#blog" className="navigation-link white w-nav-link">Blog</a>
    <a href="#contact" className="navigation-link white w-nav-link">Contact</a>

   Home
   About
   Experience
   Education
   Projects
   Contact
    

        <Link to="/">Home</Link>
        <Link to="#about">About</Link>
        <Link to="#experience">Experience</Link>
        <Link to="#projects">Projects</Link>
        <Link to="#blog">Blog</Link>
        <Link to="#contact">Contact</Link>
    </div>
    )
*/

