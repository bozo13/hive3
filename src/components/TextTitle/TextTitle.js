import React from "react"
import { Typography, Theme, Grid,Box, Container } from "@material-ui/core"
import Styles from './TextTitle.module.scss'
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
   <Container >
    <Grid container className={Styles.TitleWrap}>
      <Box component={Grid} item xs={2} display={{ xs: "none", sm: "block" }} />

    <Grid item xs={12} lg={8}>
       <Typography variant='h2' className={Styles.FirstTitle}>{text} </Typography>
       <Typography variant='h2' className={Styles.SecondTitle}>{texttitle2} </Typography>
      
    </Grid>

        <Box
        component={Grid}
        item
        xs={2}
        display={{ xs: "none", sm: "block" }}
      ></Box>
      </Grid>
    </Container>
  )
}

export default TextTitle
