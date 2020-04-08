
module.exports = () => {
  return `

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
  `
}
