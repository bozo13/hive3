module.exports = () => {
    return `
    ... on WpPage_Pagebuilder_Layouts_Carousels {
        fieldGroupName
        carouselitem {
          carouselimg {
            remoteFile {
              id
              childImageSharp {
                    fluid(maxHeight: 1200, quality: 90, cropFocus: CENTER) {
                        ...GatsbyImageSharpFluid
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
        texttitle2
      }
    `
  }
  
  
  
