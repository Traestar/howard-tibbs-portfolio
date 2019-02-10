import React from "react"
import { Link } from "gatsby"



export default (data) => (
    // if (!data) { return null };

        <div id="experience" className="section accent">
                  <div className="w-container">
                      <div className="section-title-group">
                        <Link to="#experience"><h2 className="section-heading centered">Experience</h2></Link>
                      </div>
                  <div className="columns w-row">
                      <div className="column w-col w-col-4 w-col-stack">
                         {/* <StaticQuery
                            query={graphql`
                                query ExperienceQuery {
                                    allMarkdownRemark(
                                     limit: 2,
                                     sort: { order: DESC, fields: [frontmatter___date] },
                                     filter: { fileAbsolutePath: {regex: "/(experience)/"} }
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
                            </div> */}
                        <div className="text-block"><strong>Test Company</strong></div>
                          <div className="text-block-4">Anytown, USA</div>
                          <div className="text-block-3">January, 2020 – January, 2020</div>
                          <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                          </p>
                          <div className="skill-div">
                              <div className="react-label label-react">
                                  <div className="label-text">HTML</div>
                              </div>
                              <div className="node-label label-nodejs">
                                  <div className="label-text">NodeJS</div>
                              </div>
                              <div className="css-label label-css">
                                  <div className="label-text">CSS</div>
                              </div>
                              <div className="typescript-label label-typescript">
                                  <div className="label-text">TypeScript</div>
                              </div>
                          </div> 
                      
                        </div>
                        {/* {data.allMarkdownRemark.edges.map(({node}) => (
                            <div className="column-2 w-col w-col-4 w-col-stack" key={node.id}>
                                <div className="text-block"><strong>{node.frontmatter.title}</strong></div>
                                <div className="text-block-4">{node.frontmatter.company_role}</div>
                                <div className="text-block-4">{node.frontmatter.location}</div>
                                <div className="text-block-3">{node.frontmatter.work_from} – {node.frontmatter.work_to}</div>
                                <p className="paragraph">{node.frontmatter.excerpt}</p>
                                <div className="skill-div">{node.frontmatter.tags}</div>
                            </div>
                         ))} */}
                        {/* <StaticQuery 
                            render={data => (
                                {data.allFile.edges.map(({ node }) => (
                                    <div className="column-2 w-col w-col-4 w-col-stack">
                                        <div className="text-block"><strong>{node.childMarkdownRemark.title}</strong></div>
                                        <div className="text-block-4">{node.childMarkdownRemark.company_role}</div>
                                        <div className="text-block-4">{node.childMarkdownRemark.location}</div>
                                        <div className="text-block-3">{node.childMarkdownRemark.work_from} – {node.childMarkdownRemark.work_to}</div>
                                        <p className="paragraph">{node.childMarkdownRemark.excerpt}</p>
                                        <div className="skill-div">{node.childMarkdownRemark.tags}</div>
                                    </div>
                                ))}
                            )}
                                /> 
                                </div>
                                */}
                     {/* <div className="column-2 w-col w-col-4 w-col-stack">
                          <div className="text-block"><strong>Teksystems</strong></div>
                          <div className="text-block-4">Philadelphia, Pennsylvania</div>
                          <div className="text-block-3">February 2014 – August 2014</div>
                          <p className="paragraph">Develop web applications and sites in a PHP/Apache/MySQL development environment using a mix of CMS applications and plain text development. Worked with researchers and organizers for creating websites for symposiums and research projects.</p>
                          <div className="skill-div">
                              <div className="html-label label-html">
                                  <div className="label-text">HTML</div>
                              </div>
                              <div className="css-label label-css">
                                  <div className="label-text">CSS</div>
                              </div>
                              <div className="php-label label-php">
                                  <div className="label-text">PHP</div>
                              </div>
                              <div className="joomla-label label-joomla">
                                  <div className="label-text">joomla</div>
                              </div>
                              <div className="drupal-label label-drupal">
                                  <div className="label-text">Drupal</div>
                              </div>
                          </div>
                      </div>
                      
                      <div className="column-3 w-col w-col-4 w-col-stack">
                          <div className="text-block"><strong>Hi-Tec Systems, Inc.</strong></div>
                          <div className="text-block-4">Egg Harbor Township, New Jersey</div>
                          <div className="text-block-3">October 2011 – February 2014</div>
                          <p className="paragraph">Develop recommendations reports based on the results of the analysis and send to Operation Managers. Use PHP, CSS, and HTML to create and maintain a server portal that holds all relevant project data and documents.</p>
                          <div className="skill-div">
                              <div className="html-label label-html">
                                  <div className="label-text">HTML</div>
                              </div>
                              <div className="html-label label-css">
                                  <div className="label-text">CSS</div>
                              </div>
                              <div className="php-label label-php">
                                  <div className="label-text">PHP</div>
                              </div>
                              <div className="cmsmadesim-label label-cmsmadesim">
                                  <div className="label-text">CMS MADE SIMPLE</div>
                              </div>
                          </div>
                            </div> */}
                  </div>
              </div>
            </div>
);

