
module.exports = () => {
  return `
      ... on WpPage_Pagebuilder_Layouts_Hero {
          fieldGroupName
          image {
              altText
              remoteFile {
                  childImageSharp {
                      fluid(maxHeight: 1200, quality: 90, cropFocus: CENTER) {
                          ...GatsbyImageSharpFluid
                      }
                  }
            }
          }
          text
          textColor
      }
  `
}
