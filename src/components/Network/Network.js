import React from 'react';
import {Typography, Box, Grid, Container} from '@material-ui/core/';
import NetworkBg from '../../assets/images/NetworkBg.png'
import NetworkBg2 from '../../assets/images/NetworkBg2.png'
import Styles from './Network.module.scss'



const Network = ({text1, text2, textColor, texttitle ,texttitle2}) => {

  return (
    <Container>
      <Grid container  className={Styles.root}>
        <Box
        component={Grid}
        item
        xs={1}
        display={{ xs: "none", lg: "block" }}
        />
        <Box
        component={Grid}
        item
        xs={12}  sm={5}
        className= {Styles.NetworkBg}
        data-sal="fade"
        data-sal-delay="0"
        data-sal-duration='2000'
        data-sal-easing="ease"
        />


        <Grid item xs={12} sm ={3} className={Styles.centerTop}>
          <Typography variant = 'h2'  className={Styles.texttitle}
          data-sal="slide-down"
          data-sal-delay="1300"
          data-sal-duration='500'
          data-sal-easing="ease"> {texttitle} </Typography>
          <Typography variant = 'h2' color='secondary'  className={Styles.texttitle2}
          data-sal="slide-down"
          data-sal-delay="1400"
          data-sal-duration='500'
          data-sal-easing="ease">{texttitle2} </Typography>
        </Grid>
        <Grid item xs={12} sm={4}   className={Styles.textBlock}>
          <Typography  variant = 'body1'  
          data-sal="slide-down"
          data-sal-delay="1500"
          data-sal-duration='500'
          data-sal-easing="ease"> {text1}</Typography>
        </Grid>
        <Box
        component={Grid}
        item
        xs={6}
        display={{ xs: "none", lg: "block" }}
      
        />
        <Grid item xs={12} sm={5}  className={Styles.text2}>
         <Typography variant = 'body1'
         data-sal="slide-down"
         data-sal-delay="600"
         data-sal-duration='500'
         data-sal-easing="ease">{text2}</Typography>
        </Grid>
    </Grid>
  </Container>
  )
}

export default Network
