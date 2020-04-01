import React from "react"
import FluidImage from "../../components/FluidImage"
import { Grid } from "@material-ui/core"

const styles = {
    root: {
        width:'100%',
        height:'50vh',
    },
}

const Divider = ({ gridcontainer}) => {

  return (
<Grid container spacing={gridcontainer} style={styles.root} />


  )
}

export default Divider
