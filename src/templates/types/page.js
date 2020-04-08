import React from "react"
import { graphql } from "gatsby"
import BlogPost from "../../components/template-parts/blog-post"

export default ({ data }) => <BlogPost data={data} />

export const query = graphql`
  query page($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPage(id: { eq: $id }) {
      title  
      content
      pageBuilder {
          fieldGroupName
          layouts {
            ... on WpPage_Pagebuilder_Layouts_Hero {
              fieldGroupName
              text
              textColor
              image {
                remoteFile {
              id
              childImageSharp {
                    fluid(maxHeight: 1200, quality: 90, cropFocus: CENTER) {
                        ...GatsbyImageSharpFluid
                    }
                }
              }
              }
            }
            ... on WpPage_Pagebuilder_Layouts_Einobjekt {
              fieldGroupName
              backgroundColor
              text1
              text2
              textColor
              texttitle
              texttitle2
            }
            ... on WpPage_Pagebuilder_Layouts_Kontakt {
              fieldGroupName
              backgroundColor
              text1
              text2
              textColor
              texttitle
             
            }
            ... on WpPage_Pagebuilder_Layouts_Berlins {
              backgroundColor
          fieldGroupName
          texttiltle2
          text1
          text2
          textColor
          texttitle
            }
            ... on WpPage_Pagebuilder_Layouts_Downloadable {
              fieldGroupName
              backgroundColor
              text1
              text2
              textColor
              texttitle
            }
            ... on WpPage_Pagebuilder_Layouts_Network {
              fieldGroupName
              backgroundColor
              text1
              text2
              textColor
              texttitle
              texttitle2
            }
         
            ... on WpPage_Pagebuilder_Layouts_TextTitle {
              fieldGroupName
              text
              texttitle2
       
            }
            ... on WpPage_Pagebuilder_Layouts_Keyfacts {
            fieldGroupName
                keyfacts {
                    description
                    fieldGroupName
                    title
                }
                keyfacts2 {
                    description
                    fieldGroupName
                    title
                }
            }
          
            ... on WpPage_Pagebuilder_Layouts_Mapbox {
            fieldGroupName
                mapboxcontainer {
                description
                except
                fieldGroupName
                latitude
                longitude
                name
                }
            }
            ... on WpPage_Pagebuilder_Layouts_Carousels {
            fieldGroupName
            carouselitem {
              carouselimg {
                remoteFile {
                  id
                  childImageSharp {
                        fluid(maxHeight: 1200, quality: 90, cropFocus: CENTER) {
                            ...GatsbyImageSharpFluid
                            presentationWidth
                        }
                    }
                  }
                }
              carouseltext
              carouseltitle
          } 
          textfiled1
          textfiled2
          textfiled3
          texttitle
          texttilte2
        }
        ... on WpPage_Pagebuilder_Layouts_Vimeoplayer {
        fieldGroupName
        text
        videourl
        placeimage {
          remoteFile {
                  childImageSharp {
                      fluid(maxHeight: 1200, quality: 90, cropFocus: CENTER) {
                          ...GatsbyImageSharpFluid
                      }
                  }
            }
        }
      }
      ... on WpPage_Pagebuilder_Layouts_Anbindung {
              fieldGroupName
              title1
              title2
              anbindungen {
                description
                fieldGroupName
                title
              }
              entfernungen {
                description
                fieldGroupName
                title
              }
            }
      }
      footers {
        ... on WpPage_Pagebuilder_Footers_Footer {
            fieldGroupName
            email
            footertext
            footertitle
            telephone
            footerlogo {
                remoteFile {
                    childImageSharp {
                        fluid(maxHeight: 1200, quality: 90, cropFocus: CENTER) {
                            ...GatsbyImageSharpFluid
                        }
                    }
              }
            }
        }
      }
        
        
      }
      featuredImage {
        remoteFile {
          ...HeroImage
        }
      }
    }

    nextPage: wpPage(id: { eq: $nextPage }) {
      title
      link
    }

    previousPage: wpPage(id: { eq: $previousPage }) {
      title
      link
    }
  }
`
