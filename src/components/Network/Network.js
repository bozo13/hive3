import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import NetworkBg from '../../assets/images/NetworkBg.png'
import NetworkBg2 from '../../assets/images/NetworkBg2.png'


const styles = {
  root: {
      zIndex: '-1',
      marginTop:'-8%',
  },
  centerTop:{
    marginLeft:'-8.333%',
    marginTop:'-8.333%',
  },
  NetworkBg:{
    backgroundSize:  "cover",
    width:'100%',
    backgroundImage: `url(${NetworkBg})`,
    height: '593px',
    
  },
  texttitle:{
    marginLeft:'8.12%',
    color:'#303340',
  },
  texttitle2:{
    marginLeft:'15.3333%',
  },
}

const Network = ({text1, text2, textColor, texttitle ,texttitle2}) => {

  return (
    <>
     <Grid container>
      <Box
      component={Grid}
      item
      xs={4}
      display={{ xs: "none", lg: "block" }}
      />
      <Grid item xs={12} sm={8} >
        <Typography variant = 'h2'  style={styles.texttitle}> {texttitle}</Typography>
        <Typography variant = 'h2' color='secondary'  style={styles.texttitle2}> {texttitle2}</Typography>
      </Grid>
      </Grid>
      <Grid container style ={styles.root}>
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
        style = {styles.NetworkBg}
        />


        <Box
        component={Grid}
        item
        xs={3}
        display={{ xs: "none", lg: "block" }}
        style={styles.centerTop}
        >
        <img src={NetworkBg2} style={{margin:'0 auto', maxWidth:'100%',textAlign:'center'}} />
        </Box>
        <Grid item xs={12} sm={4}  style={{alignSelf:'center' }}>
          <Typography  variant = 'body1' style={{marginLeft:'30px' }} > {text1}</Typography>
        </Grid>
        <Box
        component={Grid}
        item
        xs={6}
        display={{ xs: "none", lg: "block" }}
        />
      <Grid item xs={12} sm={5} >
      <Typography variant = 'body1'> {text2}</Typography>
    </Grid>
    </Grid>
    </>
  )
}

export default Network
