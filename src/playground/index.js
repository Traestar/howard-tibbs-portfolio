import React from "react";
import { Link } from "gatsby"
import Image from '../components/image'
import Layout from '../components/layout'

const IndexPage = () => (
    <Layout>

      <div>
        <div>
          <h1>Hello Gatsby!</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>
            I&apos;m John Doe, a Senior UX Developer with five years of industry experience, specializing in developing
            React apps with the best UX users can get.
          </p>
          <Link to="/contact">
            Test
          </Link>
        </div>
        <div>
          <p>Now go build something great.</p>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <img src="https://source.unsplash.com/random/400x200" alt="" />
            <Image />
          </div>
        </div>
        <div>
          <div>Latest stories</div>
            test
        </div>
      </div>
    </Layout>
  )
  
  export default IndexPage


