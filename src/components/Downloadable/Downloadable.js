import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import BerlinBg from '../../assets/images/BerlinBg.png'
import IconDown1 from '../../assets/images/IconDown1.png'
import IconDown2 from '../../assets/images/IconDown2.png'
import { flexbox } from '@material-ui/system';
import Styles from './Downloadable.module.scss'
 

const styles = {



}

const Downloadable = ({text1, text2, textColor, texttitle}) => {

  return (
     <Grid container
     justify="center"
     alignItems="center" className= { Styles.container}>
      <Grid item xs={12}   >
        <Typography   variant='h2' className={Styles.title} > { texttitle}</Typography>
      </Grid>


      <Grid item xs={6} className={Styles.root} >
      <Box className={Styles.text1} alignItems="flex-start"  justify="center">
      <Typography variant='h4' color= 'secondary'> {text1} </Typography>
      </Box>

      <Box className={Styles.img1}>
        <img src={IconDown1}  />
      </Box>
   
   
      <Box className={Styles.img2}>
       <img src={IconDown2} />
      </Box>
      <Box className={Styles.text2}>
      <Typography  variant='h4' color= 'secondary'>{text2}</Typography>
    </Box>
  
    </Grid>
    <Grid item xs={12}  className= {Styles.text2}>
    
  </Grid>

  </Grid>  
  )
}

export default Downloadable
