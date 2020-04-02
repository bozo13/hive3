import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import BerlinBg from '../../assets/images/BerlinBg.png'
import { Container } from '@material-ui/core';


const styles = {
  root: {
      width:'100%',
      height:'59vh',
      backgroundImage: `url(${BerlinBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center top',

      left: '0%',
      backgroundRepeat: 'no-repeat',
  },
  texttitle:{
      paddingTop: '3rem',
  },
  texttiltle2:{
      paddingLeft : '12%',
      paddingBottom : '0rem',
  },
  block:{
    padding:'2rem 0 0 0',
  },
}

const Berlins = ({text1, text2, textColor, texttitle,  texttiltle2}) => {

  return (
  <Box style ={styles.root}>
    <Container >
     <Grid 
    container
    id={'Lage'}
  >
    <Box
      component={Grid}
      item
      xs={3}
      display={{ xs: "none", lg: "block" }}
      />

      <Grid item xs={12} sm={9} >
        <Typography variant="h2" style={styles.texttitle}>{texttitle}</Typography>
        <Typography variant="h2" color='secondary' style = {styles.texttiltle2}>{  texttiltle2}</Typography>
      </Grid>
  
      <Box
      component={Grid}
      item
      xs={3}
      display={{ xs: "none", lg: "block" }}
      />
    
    <Grid item xs={12} sm={4} style={styles.block}>
    
        <Typography variant="body1" dangerouslySetInnerHTML={{__html: text1}} />
    </Grid>
    <Box
    component={Grid}
    item
    xs={6}
    display={{ xs: "none", lg: "block" }}
    />
    <Grid item xs={12} sm={5}  style={styles.block}>
      <Typography variant="body1" dangerouslySetInnerHTML={{__html: text2}} />
    </Grid>
    <Grid item xs={12}   style={styles.block}></Grid>
    <Grid item xs={12}   style={styles.block}></Grid>
    </Grid>
    </Container>
  </Box>
  )
}

export default Berlins
