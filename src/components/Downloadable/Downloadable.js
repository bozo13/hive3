import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import BerlinBg from '../../assets/images/BerlinBg.png'
import IconDown1 from '../../assets/images/IconDown1.png'
import IconDown2 from '../../assets/images/IconDown2.png'
import { flexbox } from '@material-ui/system';


const styles = {
  root: {
    width: '100%',
    display: 'flex',
    paddingTop: '3rem',
  },
  img1:{},
  img2:{ margin: '130px 0px  0px -81px'},
  text1:{ padding: '3rem 2rem 2rem 2rem', },
  text2:{padding: '10rem 2rem 2rem 2rem',},
  title:{ textAlign: 'center'},

}

const Downloadable = ({text1, text2, textColor, texttitle}) => {

  return (
     <Grid container
     justify="center"
     alignItems="center" style= { {paddingTop: '7rem'}}>
      <Grid item xs={12}   >
        <Typography   variant='h2' color= 'secondary' style={styles.title} > { texttitle}</Typography>
      </Grid>


      <Grid item xs={6} style={styles.root} >
      <Box style={styles.text1} alignItems="flex-start"  justify="center">
      <Typography variant='h4' color= 'secondary'> {text1} </Typography>
      </Box>

      <Box style={styles.img1}>
        <img src={IconDown1}  />
      </Box>
   
   
      <Box style={styles.img2}>
       <img src={IconDown2} />
      </Box>
      <Box style={styles.text2}>
      <Typography  variant='h4' color= 'secondary'>{text2}</Typography>
    </Box> 
      <Box
      component={Grid}
      item
      xs={3}
      display={{ xs: "none", sm: "block" }}
      />
 
    </Grid>
    <Grid item xs={12}  style= {styles.text2}>
    
  </Grid>

  </Grid>  
  )
}

export default Downloadable
