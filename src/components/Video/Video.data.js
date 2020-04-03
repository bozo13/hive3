
module.exports = () => {
  return `
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
  `
}
