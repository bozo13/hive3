
module.exports = () => {
  return `

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

  `
}
