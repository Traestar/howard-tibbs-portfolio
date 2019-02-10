const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const PostTemplate = path.resolve('./src/templates/post-template.js')
const BlogTemplate = path.resolve('./src/templates/blog-template.js')

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({ node, getNode, basePath: 'posts' })

        createNodeField({
            node,
            name: 'slug',
            value: slug,
        })

    }
}

exports.createPages = async ({ graphql, actions }) => {

    const { createPage } = actions
    const result = await graphql(`
        {
            allMarkdownRemark (limit: 1000) {
              edges {
                node {
                  fields {
                    slug
                  }
                  
                }
              }
            }
          }
    `)

/*     const allExperiencePages = await graphql(`
    { 
      allMarkdownRemark(limit: 1000) {
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
  `)

   // gatsby structures allExperiencePages into an object you can loop through
  // The documentation isn't great but the 'data' property contains what you're looking for
  // Run a forEach with a callback parameter that contains each page's data
  allExperiencePages.data.allMarkdownRemark.edges.forEach( page => {

    // Make individual pages with createPage variable you made earlier
    // The 'path' needs to match where you want the pages to be when your site builds
    // 'conponent' is what Gatsby will use to build the page
    // 'context' is the data that the component will receive when you `gatsby build`
    createPage({
      path: `/pages/${page.node.title}/`,
      component: path.resolve('src/components/ExperienceBox'),
      context: {
        id: page.node.id,
        title: page.node.frontmatter.title,
        company_role: page.node.frontmatter.company_role,
        location: page.node.frontmatter.location,
        work_from: page.node.frontmatter.work_from,
        work_to: page.node.frontmatter.work_to,
        tags: page.node.frontmatter.tags,
        excerpt: page.node.excerpt
      }
    })
  })  */


    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node: post }) => {
        createPage({
            path: `posts${post.fields.slug}`,
            component: PostTemplate,
            context: {
                slug: post.fields.slug,
            },
        })
    })

    const postsPerPage = 2
    const totalPages = Math.ceil(posts.length / postsPerPage)
        
    Array.from({ length: totalPages }).forEach((_, index) => {
        const currentPage = index + 1
        const isFirstPage = index === 0
        const isLastPage = currentPage === totalPages

        createPage({
            path: isFirstPage ? '/blog' : `/blog/${currentPage}`,
            component: BlogTemplate,
            context: {
                limit: postsPerPage,
                skip: index * postsPerPage,
                isFirstPage,
                isLastPage,
                currentPage,
                totalPages,
            },
        })
    })
}

