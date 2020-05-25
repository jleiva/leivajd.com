// import React from 'react'
// import { Link, graphql } from 'gatsby'

// import Layout from '../components/layout'

// class BlogIndex extends React.Component {
//   render() {
//     const { data } = this.props
//     const siteTitle = data.site.siteMetadata.title
//     const posts = data.allMarkdownRemark.edges
//     const { currentPage, numPages } = this.props.pageContext
//     const isFirst = currentPage === 1
//     const isLast = currentPage === numPages
//     const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
//     const nextPage = (currentPage + 1).toString()

//     return (
//       <Layout location={this.props.location} title={siteTitle}>
//         {posts.map(({ node }) => {
//           const title = node.frontmatter.title || node.fields.slug
//           return (
//             <div key={node.fields.slug}>
//               <h3>
//                 <Link to={node.fields.slug}>
//                   {title}
//                 </Link>
//               </h3>
//               <small>{node.frontmatter.date}</small>
//               <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
//             </div>
//           )
//         })}
//         <ul >
//           {!isFirst && (
//             <Link to={prevPage} rel="prev">
//               ← Previous Page
//             </Link>
//           )}
//           {Array.from({ length: numPages }, (_, i) => (
//             <li
//               key={`pagination-number${i + 1}`}
//             >
//               <Link
//                 to={`/${i === 0 ? '' : i + 1}`}
//               >
//                 {i + 1}
//               </Link>
//             </li>
//           ))}
//           {!isLast && (
//             <Link to={nextPage} rel="next">
//               Next Page →
//             </Link>
//           )}
//         </ul>
//       </Layout>
//     )
//   }
// }

// export default BlogIndex

// export const pageQuery = graphql`
//   query blogPageQuery($skip: Int!, $limit: Int!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//       limit: $limit
//       skip: $skip
//     ) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "DD MMMM, YYYY")
//             title
//           }
//         }
//       }
//     }
//   }
// `