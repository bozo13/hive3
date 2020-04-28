import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import BerlinBg from '../../assets/images/BerlinBg.png'
import IconDown1 from '../../assets/images/IconDown1.png'
import IconDown2 from '../../assets/images/IconDown2.png'
import { flexbox } from '@material-ui/system';
import Styles from './Downloadable.module.scss'


const Downloadable = ({text1, text2, textColor, texttitle, broschure, grundrisse}) => {

  return (
     <Grid container
     justify="center"
     className= { Styles.container}>
      <Grid item xs={12}   >
        <Typography   variant='h2' className={Styles.title} >{texttitle}</Typography>
      </Grid>


      <Grid item xs={6} className={Styles.root} >
      <Box className={Styles.text1} alignItems="flex-start"  justify="center">
      <Typography variant='h4' color= 'secondary'
                      data-sal="slide-left"
                      data-sal-delay="200"
                      data-sal-duration='800'
                      data-sal-easing="ease"> {text1} </Typography>
      </Box>

      <Box className={Styles.img1}
                      data-sal="slide-down"
                      data-sal-delay="200"
                      data-sal-duration='800'
                      data-sal-easing="ease">
      <a href={broschure.mediaItemUrl} download target= '_blank'>
        <img src={IconDown1}  />
      </a>
      </Box>
   
      <Box className={Styles.img2}
                      data-sal="slide-up"
                      data-sal-delay="200"
                      data-sal-duration='800'
                      data-sal-easing="ease">
       <a href={grundrisse.mediaItemUrl} download target= '_blank'>
        <img src={IconDown2} />
       </a>
      </Box>
      <Box className={Styles.text2}>
      <Typography  variant='h4' color= 'secondary'
                      data-sal="slide-right"
                      data-sal-delay="200"
                      data-sal-duration='800'
                      data-sal-easing="ease">{text2}</Typography>
    </Box>
  
    </Grid>
    <Grid item xs={12}  className= {Styles.space}>
    
  </Grid>

  </Grid>  
  )
}

export default Downloadable
