import React from "react";
//import { Link } from "gatsby"

import fbicon from '../../images/social-02-white.svg'
import twicon from '../../images/social-18-white.svg'
import ghicon from '../../images/social-05-white.svg'
import inicon from '../../images/social-07-white.svg'
import liicon from '../../images/social-09-white.svg'

const HeroBox = () => (

        <div id="home" className="hero-section">
            <div data-ix="fade-in-bottom-page-loads" className="w-container">
                <h1 className="hero-heading">Hi I'm Howard Tibbs,</h1>
                <div className="hero-subheading">I build beautiful and scalable React Web Apps</div>
                <div>
                        <a href="https://www.facebook.com/Traestar" target="_blank" rel="noopener noreferrer" className="social-button w-inline-block"><img src={fbicon} width={25} alt="" /></a>
                        <a href="https://twitter.com/traesql" target="_blank" rel="noopener noreferrer" className="social-button w-inline-block"><img src={twicon} width={25} alt="" /></a>
                        <a href="https://github.com/traestar" target="_blank" rel="noopener noreferrer" className="social-button w-inline-block"><img src={ghicon} width={25} alt="" /></a>
                        <a href="https://www.instagram.com/traestar_/" target="_blank" rel="noopener noreferrer" className="social-button w-inline-block"><img src={inicon} width={25} alt="" /></a>
                        <a href="https://www.linkedin.com/in/howardtibbs3/" target="_blank" rel="noopener noreferrer" className="social-button w-inline-block"><img src={liicon} width={25} alt="" /></a>
                    </div>
              {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <img src="https://source.unsplash.com/random/400x200" alt="" />
                </div> */}
            </div>
          </div>

)

export default HeroBox