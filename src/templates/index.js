import React from "react"
import { graphql, Link, navigate } from "gatsby"
import Img from "gatsby-image"
import ReactPaginate from "react-paginate"


import Layout from "../components/layout"
import { normalizePath } from "../utils/get-url-path"

export default ({ data, pageContext }) => (
  <Layout>
    hello
    <ul>
      {data.allWpPost.nodes.map((page) => (
        <li key={page.link}>
          <Link to={normalizePath(page.uri)}>

                  {!!page?.featuredImage?.node?.remoteFile?.childImageSharp && (
                    <Img
                      fluid={
                        page.featuredImage.node.remoteFile.childImageSharp.fluid
                      }
                    />
                  )}
            <div>
            <h2>{page.title}</h2></div>
            </Link>
        </li>
      ))}
    </ul>

    {pageContext && pageContext.totalPages > 1 && (
      <ReactPaginate
          previousLabel={
            pageContext?.page !== 1 && <button>Previous page</button>
          }
          nextLabel={
            pageContext?.totalPages !== pageContext.page && (
              <button>Next page</button>
            )
          }
          onPageChange={({ selected }) => {
            const page = selected + 1
            const path = page === 1 ? `/blog/` : `/blog/${page}/`
            navigate(path)
          }}
          disableInitialCallback
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageContext.totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          initialPage={pageContext.page - 1}
        />
    )}
  </Layout>
)

export const query = graphql`
  fragment Thumbnail on File {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }

  query HomePage($offset: Int!, $perPage: Int!) {
    allWpPost(
      limit: $perPage
      skip: $offset
      filter: { nodeType: { in: ["Post", "Page", "Alot"] } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        uri
        title
        featuredImage {
          node {
            remoteFile {
              ...Thumbnail
            }
          }
        }
      }
    }
  }
`
