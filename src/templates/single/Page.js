import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout";
import PageComponents from "../../components/PageComponents";

export default ({ data }) => {

  return (
      <Layout>
        {data.page.hasOwnProperty('pageComponents') && <PageComponents data={data.page.pageComponents.pagecomponents} />}
      </Layout>
  )
}

export const query = graphql`
  query page($id: String!, $nextPage: String, $previousPage: String) {
  page: wpPage(id: {eq: $id}) {
    title
    pageComponents {
      pagecomponents {
        ... on WpPage_Pagecomponents_Pagecomponents_Blockcards {
          bgcolor
          blocktitleenabled
          blocktitle {
            posttitle
            pretitle
            title
            fieldGroupName
          }
          cards {
            image {
              localFile {
                publicURL
              }
            }
            cardcontent
            cardtitle
            link {
              target
              title
              url
            }
            fieldGroupName
          }
          customBgcolor
          fieldGroupName
        }
        ... on WpPage_Pagecomponents_Pagecomponents_Blockhero {
          bgcolor
          contenthtml
          customBgcolor
          fieldGroupName
          imageposition
          title
          pretitle
          cta {
            target
            title
            url
          }
          options {
            theme
            fieldGroupName
          }
          image {
            altText
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        ... on WpPage_Pagecomponents_Pagecomponents_Blocktitle {
          fieldGroupName
          pretitle
          title
          contenthtml
          options {
            bgcolor
            custombgcolor
            blockPaddingBottom
            blockPaddingMd
            theme
          }
        }
        ... on WpPage_Pagecomponents_Pagecomponents_Blockimagetext {
          fieldGroupName
          imageposition
          image {
            localFile {
              childImageSharp {
                fluid {
                  tracedSVG
                }
              }
            }
          }
          contenthtml
          options {
            bgcolor
            custombgcolor
          }
        }
      }
    }
  }
  nextPage: wpPage(id: {eq: $nextPage}) {
    title
    uri
  }
  previousPage: wpPage(id: {eq: $previousPage}) {
    title
    uri
  }
}
`
