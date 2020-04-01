import React from "react"
import { Typography, Theme, Grid,Box } from "@material-ui/core"
import BgTop from '../../assets/images/BgTop.png'

const styles = {
  root: {
      width:'100vw',
      height:'38vh',
      backgroundImage: `url(${BgTop})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center bottom',
      zIndex: '2',
      position: 'absolute',
      left: '0%',
      backgroundRepeat: 'no-repeat',
      marginTop: '0',
  },
  TextTitle:{

  },
  TextTitle2:{
  },
}

const TextTitle = ({ text ,texttitle2}) => {

  return (
    <Grid item xs={12} style={styles.TextTitle}>

      <div style={{
    
        padding: '3rem',
        textAlign: 'center',
      
      }}>
        
       <Typography variant='h2' >{text} </Typography>
       <Typography variant='h2' color='secondary'>{texttitle2} </Typography>
      </div>

    </Grid>
  )
}

export default TextTitle
