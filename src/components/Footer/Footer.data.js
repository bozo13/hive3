
module.exports = () => {
    return `
        ... on WpPage_Pagebuilder_Footers_Footer {
            fieldGroupName
            email
            footertext
            footertitle
            telephone
            footerlogo {
                fieldGroupName
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
  