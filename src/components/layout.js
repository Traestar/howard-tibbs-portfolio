import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import '../styles/webflow.css'
import '../../css/webflow.css'
import '../../css/normalize.css'
import '../../css/howard-tibbs-portfolio.webflow.css'

import Header from './header'
import Footer from './footer'




const getSiteMetadata = graphql`
    {
    site {
      siteMetadata {
        title
        description
        author
        createdAt
      }
    }
  }
`  


const Layout = ({ children }) => (
    <StaticQuery
        query={getSiteMetadata}
            render={data => (
                <>
                <div className="body">
                <div id="app">
                <Header siteTitle=
                {data.site.siteMetadata.title} />
                <div
                    /* style={{
                        margin: `0 auto`,
                        maxWidth: 960,
                        padding: `0px 1.0875rem 1.45rem`,
                        paddingTop: 0
                    }} */
        >
          {children}
          <Footer />
          </div>
        </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout