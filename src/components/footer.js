import React from "react"
import { StaticQuery, graphql } from 'gatsby'

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


class Footer extends React.Component {
    render() {
        return (
            <div  style={{ backgroundColor: "grey" }} className="footer accent">
                <div className="w-container">
                <StaticQuery
                    query={getSiteMetadata}
                    render={data => (
                        <>
                            <footer>
                                © Copyright {data.site.siteMetadata.createdAt} {' '} | Created by {data.site.siteMetadata.author}     
                            </footer>
                        </>
                        )}
                        />
                    <div className="float-right">
                        <a href="http://www.facebook.com/traestar" target="_blank" rel="noopener noreferrer" className="social-icon-link w-inline-block"><img src="images/social-03.svg" width={20} alt="" /></a>
                        <a href="http://www.twitter.com/traesql" target="_blank" rel="noopener noreferrer" className="social-icon-link w-inline-block"><img src="images/social-18.svg" width={20} alt=""t /></a>
                        <a href="https://www.linkedin.com/in/howardtibbs3/" target="_blank" rel="noopener noreferrer" className="social-icon-link w-inline-block"><img src="images/social-09.svg" width={20} alt="" /></a>
                        <a href="mailto:traemillz@gmail.com?subject=Message%20From%20Port" className="social-icon-link w-inline-block"><img src="images/social-30.svg" width={20} alt="" /></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;