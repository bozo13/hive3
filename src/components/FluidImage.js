import React from "react"
import GatsbyImage from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"


const FluidImage = ({ image,gallery, withFallback = false, ...props }) => {
  const data = useStaticQuery(graphql`
      query {
          fallbackImage: file(relativePath: { eq: "fallback.svg" }) {
              publicURL
          }
      }
  `)

  /**
   * Return fallback Image, if no Image is given.
   */


  if (!image) {
    return withFallback ? <img src={data.fallBackImage.publicURL} alt={"Fallback"} {...props}/> : null
  }

  if (image && image.remoteFile) {
    return <GatsbyImage fluid={image.remoteFile.childImageSharp.fluid} alt={image.altText} {...props}/>
  }

  if (!gallery) {
    return withFallback ? <img src={data.fallBackImage.publicURL} alt={"Fallback"} {...props}/> : null
  }

  if (gallery && gallery.remoteFile) {
    return <GatsbyImage fluid={gallery.remoteFile.childImageSharp.fluid} alt={gallery.remoteFile.altText} {...props}/>
   
  }
  return <img src={image.sourceUrl} alt={image.altText} {...props}/>
}

export default FluidImage
