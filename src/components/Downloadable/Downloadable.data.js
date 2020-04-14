
module.exports = () => {
  return `
  ... on WpPage_Pagebuilder_Layouts_Downloadable {
    fieldGroupName
    backgroundColor
    text1
    text2
    textColor
    texttitle

    broschure {
      sourceUrl
      mediaItemUrl
    }
    grundrisse {
      sourceUrl
      mediaItemUrl
    }
  }
  `
}
  