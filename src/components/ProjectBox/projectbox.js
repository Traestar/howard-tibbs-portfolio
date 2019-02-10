import React from "react"
import { Link } from "gatsby"



const ProjectBox = () => (
    <div id="projects" className="section">
          <div className="w-container">
              <div className="section-title-group">
                <Link to="#Projects"><h2 className="section-heading centered">My Projects</h2></Link>
              </div>
              <div className="wrap w80-50">
                  <div className="headline-6-col" />
                  <div className="content4-items">
                    <div className="_4-col">
                        <div className="content4-item">
                        <div className="content4-image" />
                        <div className="tagline">React, Nodejs, Webpack</div>
                        <h3>Nestle</h3>
                        <p>This is a test project here...</p>
                        </div>
                    </div>
                    <div className="_4-col">
                        <div className="content4-item">
                        <div className="content4-image content4-image2" />
                        <div className="tagline">React, Nodejs, Webpack</div>
                        <h3>Cause Roast Coffee</h3>
                        </div>
                    </div>
                    <div className="_4-col _4-col-last">
                        <div className="content4-item">
                        <div className="content4-image content4-image3" />
                        <div className="tagline">React, Nodejs, Webpack</div>
                        <h3>4Oceans</h3>
                        </div>
                    </div>
                  </div>
                  <div className="content4-items">
                  <div className="_4-col">
                      <div className="content4-item">
                      <div className="content4-image content4-image4" />
                      <div className="tagline">React, Nodejs, Webpack</div>
                      <h3>AXE&nbsp;Black</h3>
                      </div>
                  </div>
                  <div className="_4-col">
                      <div className="content4-item">
                      <div className="content4-image content4-image5" />
                      <div className="tagline">React, Nodejs, Webpack</div>
                      <h3>Jane Cambell</h3>
                      </div>
                  </div>
                  <div className="_4-col _4-col-last">
                      <div className="content4-item">
                      <div className="content4-image content4-image6" />
                      <div className="tagline">React, Nodejs, Webpack</div>
                      <h3>Grass</h3>
                      </div>
                  </div>
                  </div>
                  <div className="wrap w50-start">
                  <div className="_6-col">
                      <div className="content5-headline-wrapper">
                      <h1 className="h1-jumbo">Case Study: Weather App</h1>
                      </div>
                  </div>
                  <div className="_6-col _6-col-last">
                      <div className="content5-description">
                      <p className="text-16 text-16-60">My best project so far has been my Weather App. </p><span className="link-16-blue content5-link">Learn more about this WeatherApp.</span></div>
                  </div>
                    </div>
              </div>
          </div>
      </div>

)

export default ProjectBox