import React from 'react';
import {Typography, Box, Grid, Container} from '@material-ui/core/';
import NetworkBg from '../../assets/images/NetworkBg.png'
import NetworkBg2 from '../../assets/images/NetworkBg2.png'
import Styles from './Network.module.scss'
import {Reveal,Fade} from 'react-reveal';


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
        />


        <Grid item xs={12} sm ={3} className={Styles.centerTop}>
          <Typography variant = 'h2'  className={Styles.texttitle}> <Fade bottom>{texttitle}</Fade> </Typography>
          <Typography variant = 'h2' color='secondary'  className={Styles.texttitle2}> <Fade bottom delay={300}>{texttitle2} </Fade></Typography>
        </Grid>
        <Grid item xs={12} sm={4}   className={Styles.textBlock}>
          <Typography  variant = 'body1'  > <Fade bottom delay={600}>{text1}</Fade></Typography>
        </Grid>
        <Box
        component={Grid}
        item
        xs={6}
        display={{ xs: "none", lg: "block" }}
        />
        <Grid item xs={12} sm={5}  className={Styles.text2}>
         <Typography variant = 'body1'> <Fade bottom delay={900}>{text2}</Fade></Typography>
        </Grid>
    </Grid>
  </Container>
  )
}

export default Network
