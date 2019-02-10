import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"



export default(data) => (

        <div id="experience" className="section accent">
                  <div className="w-container">
                      <div className="section-title-group">
                        <Link to="#experience"><h2 className="section-heading centered">Experience</h2></Link>
                      </div>
                  <div className="columns w-row">
                  <StaticQuery
                  query={graphql`
                      query ExperienceQuery {
                          allMarkdownRemark(
                           limit: 2,
                           sort: { order: DESC, fields: [frontmatter___date]},
                           filter: {fileAbsolutePath: {regex: "/(experience)/"}}
                         ) {
                             edges {
                               node {
                                 id
                                 frontmatter {
                                   title
                                   company_role
                                   location
                                   work_from
                                   work_to
                                   tags
                                 }
                                 excerpt
                               }
                             }
                           }
                       }
                  
                  `}
                  render={data.allMarkdownRemark.edges.map(({ node }) => (
                      <div className="column-2 w-col w-col-4 w-col-stack" key={node.id}>
                      <div className="text-block"><strong>{node.frontmatter.title}</strong></div>
                      <div className="text-block-4">{node.frontmatter.company_role}</div>
                      <div className="text-block-4">{node.frontmatter.location}</div>
                      <div className="text-block-3">{node.frontmatter.work_from} – {node.frontmatter.work_to}</div>
                      <p className="paragraph">{node.frontmatter.excerpt}</p>
                      <div className="skill-div">{node.frontmatter.tags}</div>
                      </div>
                  ))}
                  />
                  </div>
              </div>
          </div>
);

