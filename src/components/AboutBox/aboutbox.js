import React from "react";
import { Link } from "gatsby"

import profilepic from '../../images/Profile1.jpg'

const AboutBox = () => (
    <div id="about" className="section accent">
    <div className="w-container">
        <div className="w-row">
            <div className="waterfall-image-column w-col w-col-6"><img src={profilepic} width={300} alt="" className="image-2" /></div>
            <div className="waterfall-content-column w-col w-col-6">
              <Link to="/about"><h2 className="section-heading">About Me</h2></Link>
                <div className="section-subheading">I am a Front End ReactJS Web Developer who has delivered intriguing 
                and profound solutions across various industries including aviation, casino gaming, and medical fields. My ideal focus 
                is on SaaS Research and Development, Finance, Retail, and Science.</div>
            </div>
        </div>
    </div>
</div>
)

export default AboutBox