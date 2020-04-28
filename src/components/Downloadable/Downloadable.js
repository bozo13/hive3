import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import BerlinBg from '../../assets/images/BerlinBg.png'
import IconDown1 from '../../assets/images/IconDown1.png'
import IconDown2 from '../../assets/images/IconDown2.png'
import { flexbox } from '@material-ui/system';
import Styles from './Downloadable.module.scss'
import {Reveal,Fade} from 'react-reveal';

const Downloadable = ({text1, text2, textColor, texttitle, broschure, grundrisse}) => {

  return (
     <Grid container
     justify="center"
     className= { Styles.container}>
      <Grid item xs={12}   >
        <Typography   variant='h2' className={Styles.title} > <Fade bottom>{texttitle}</Fade></Typography>
      </Grid>


      <Grid item xs={6} className={Styles.root} >
      <Box className={Styles.text1} alignItems="flex-start"  justify="center">
      <Typography variant='h4' color= 'secondary'><Fade left> {text1}</Fade> </Typography>
      </Box>

      <Box className={Styles.img1}>
      <a href={broschure.mediaItemUrl} download target= '_blank'>
        <img src={IconDown1}  />
      </a>
      </Box>
   
   
      <Box className={Styles.img2}>
       <a href={grundrisse.mediaItemUrl} download target= '_blank'>
        <img src={IconDown2} />
       </a>
      </Box>
      <Box className={Styles.text2}>
      <Typography  variant='h4' color= 'secondary'><Fade right>{text2}</Fade></Typography>
    </Box>
  
    </Grid>
    <Grid item xs={12}  className= {Styles.space}>
    
  </Grid>

  </Grid>  
  )
}

export default Downloadable
