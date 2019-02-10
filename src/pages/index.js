import React from "react";
//import { Link } from "gatsby"
// import Image from '../components/image'

import Layout from '../components/layout'

import HeroBox from '../components/HeroBox/herobox'
import AboutBox from '../components/AboutBox/aboutbox'
import ExperienceBox from '../components/ExperienceBox/experiencebox'
import ProjectBox from '../components/ProjectBox/projectbox'
import BlogBox from '../components/BlogBox/blogbox'
import ContactBox from '../components/ContactBox/contactbox'




/* const getExperienceData = graphql`
{
    allFile(filter: {internal: {mediaType: {eq: "text/markdown"}}, relativeDirectory: {regex: "/experience/"}}) {
      totalCount
      edges {
        node {
          relativePath
          childMarkdownRemark {
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
  }

` */


const IndexPage = () => (
    <Layout>
          <HeroBox />
          <AboutBox />
          <ExperienceBox />
          <ProjectBox />
          <BlogBox />
          <ContactBox />
    </Layout>
  )
  
  export default IndexPage


