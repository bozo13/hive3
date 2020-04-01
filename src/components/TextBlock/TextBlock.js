import React from "react"
import { Typography, Grid,Box } from "@material-ui/core"

const TextBlock = ({ text, textColor, backgroundColor }) => {

  return (
    <>
    <Box
    component={Grid}
    item
    xs={1}
    display={{ xs: "none", lg: "block" }}
    />

    <Grid item xs={12} sm={4} style={{backgroundColor: backgroundColor}}>
      
        <Typography variant="body1" dangerouslySetInnerHTML={{__html: text}} />

    </Grid>
    </>
  )
}

export default TextBlock
