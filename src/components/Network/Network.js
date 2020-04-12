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
        />


        <Grid item xs={12} sm ={3} className={Styles.centerTop}>
          <Typography variant = 'h2'  className={Styles.texttitle}> {texttitle}</Typography>
          <Typography variant = 'h2' color='secondary'  className={Styles.texttitle2}> {texttitle2}</Typography>
        </Grid>
        <Grid item xs={12} sm={4}  style={{alignSelf:'center' }}>
          <Typography  variant = 'body1'  > {text1}</Typography>
        </Grid>
        <Box
        component={Grid}
        item
        xs={6}
        display={{ xs: "none", lg: "block" }}
        />
        <Grid item xs={12} sm={5}  className={Styles.text2}>
         <Typography variant = 'body1'> {text2}</Typography>
        </Grid>
    </Grid>
  </Container>
  )
}

export default Network
