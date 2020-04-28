import React from "react"
import { Typography, Theme, Grid,Box, Container } from "@material-ui/core"
import Styles from './TextTitle.module.scss'
import AnbindungBg from '../../assets/svg/anbindung.svg'


const TextTitle = ({ text ,texttitle2}) => {

  return (
  <Box className={Styles.root}>
   <Container>
    <Grid container className={Styles.TitleWrap}>
      <Box component={Grid} item xs={2} display={{ xs: "none", sm: "block" }} />

    <Grid item xs={12} lg={8}>
      
        <Typography variant='h2' className={Styles.FirstTitle}
               data-sal="slide-up"
                data-sal-delay="200"
                data-sal-duration='600'
                data-sal-easing="ease"> {text} </Typography>
        <Typography variant='h2' className={Styles.SecondTitle}
                data-sal="slide-up"
                data-sal-delay="0"
                data-sal-duration='500'
                data-sal-easing="ease">{texttitle2} </Typography>
      
    </Grid>

        <Box
        component={Grid}
        item
        xs={2}
        display={{ xs: "none", sm: "block" }}
      ></Box>
      </Grid>
    </Container>
  </Box>
  )
}

export default TextTitle
