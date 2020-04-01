import React from "react"
import FluidImage from "../../components/FluidImage"
import { Grid } from "@material-ui/core"
import FooterImage from '../../assets/images/FootImage.png'

const styles = {
    root: {
        width:'100%',
        height:'50vh',
        backgroundImage: `url(${FooterImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
    },
}

const Footer = ({ email,
                footertext,
                footertitle,
                telephone,
                footerlogo }) => {

  return (
<Grid container style={styles.root}>
    <Grid item >
    <FluidImage image={footerlogo} style={{width: `100%`, height: `100% ` }}/>
      <p style={{
        position: "absolute",
        top: `calc( 50% - 20px )`,
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: '40px',
        textAlign: 'center',
        lineHeight: 1,
      }}>{footertext}</p>
      </Grid>
</Grid>

  )
}

export default Footer
