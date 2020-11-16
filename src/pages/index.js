import { graphql } from 'gatsby';
import React from 'react'
import Layout from '../components/layout'
import PageComponents from '../components/PageComponents';

function Home({ data }) {
    console.log({ data });
    return (
        <Layout>
            <h1>Zach is cool!</h1>
            <PageComponents data={data.wpPage.pageComponents.pagecomponents} />
        </Layout>
    )
}

export default Home;

export const homeQuery = graphql`
    query homepage {
        wpPage(isFrontPage: {eq: true}) {
            pageComponents {
                pagecomponents {
                    ... on WpPage_Pagecomponents_Pagecomponents_Blockimage {
                    fieldGroupName
                    image {
                        altText
                        seo {
                        metaDesc
                        metaKeywords
                        metaRobotsNofollow
                        metaRobotsNoindex
                        opengraphDescription
                        opengraphImage {
                            sizes
                        }
                        opengraphSiteName
                        opengraphTitle
                        opengraphType
                        opengraphUrl
                        schema {
                            pageType
                            articleType
                        }
                        twitterDescription
                        twitterTitle
                        twitterImage {
                            sizes
                        }
                        }
                    }
                    }
                    ... on WpPage_Pagecomponents_Pagecomponents_Blockimagetext {
                    contenthtml
                    fieldGroupName
                    image {
                        altText
                        sizes
                        srcSet
                    }
                    }
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
                        cardcontent
                        cardtitle
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
                            id
                            mediaType
                            mimeType
                            remoteFile {
                                publicURL
                            }
                            altText
                        }
                    }
                    ... on WpPage_Pagecomponents_Pagecomponents_Sliderimages {
                        fieldGroupName
                        precontenthtml
                    }
                }
            }
        }
    }

`;
