import React from 'react';
import {Typography,Grid,Container,Box} from '@material-ui/core/';
import BerlinBgCounter from '../../assets/images/BerlinBgCounter.png'
import TransHexagonBg2 from '../../assets/images/TransHexagonBg2.png'
import TransHexagonBg3 from '../../assets/images/TransHexagonBg3.png'
import Styles from './Einobjekt.module.scss'



const styles = {
  root: {
      width:'100%',
      height:'38vh',
      backgroundImage: `url(${BerlinBgCounter})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center bottom',
      zIndex: '-1',
      position: 'absolute',
      left: '0%',
      backgroundRepeat: 'no-repeat',
  },
  texttitle:{
    alignSelf: 'flex-end',
  },
  bgHex1:{
    backgroundImage: `url(${TransHexagonBg2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundSize:'contain',
    backgroundRepeat: 'no-repeat',
    height:'30vh',
    marginTop: '-7vh',
  },
  bgHex2:{
    backgroundImage: `url(${TransHexagonBg3})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundSize:'contain',
    backgroundRepeat: 'no-repeat',
    height:'30vh',
  },
  block: {
    padding: '2rem',
  },
  texttitle1:{
    
    padding: '0 0 0 2rem ',
  },
  texttitle2:{
    paddingTop: 0,
 
  },

}

const Einobjekt = ({text1, text2, textColor, texttitle, texttitle2}) => {

  return (
    <Container>
    
    <Grid container id={'Objekt'}>
      <Box
      component={Grid}
      item
      xs={12}
      display={{ xs: "none", lg: "block" }}
      />
       
        <Box style={styles.root}         
        data-sal="slide-down"
        data-sal-delay="500"
        data-sal-duration='1200'
        data-sal-easing="ease" />
      
     
        <Box
        component={Grid}
        item
        xs={6}
        display={{ xs: "none", lg: "block" }}
        style={styles.bgHex1}  /> 
      
  
      <Grid item xs={12} sm={6} style={styles.texttitle}>
          <Typography variant= 'h3'  className={Styles.texttitle1} 
          data-sal="slide-right"
          data-sal-delay="0"
          data-sal-duration='500'
          data-sal-easing="ease"> {texttitle}</Typography>
          <Typography variant= 'h3'  className={Styles.texttitle2}
          data-sal="slide-right"
          data-sal-delay="200"
          data-sal-duration='800'
          data-sal-easing="ease"> {texttitle2}</Typography>
      </Grid>
  
      <Box
      component={Grid}
      item
      xs={4}
      display={{ xs: "none", lg: "block" }}
      />
    <Grid item xs={12} sm={4} style={Styles.block}>
 
    <Typography variant='body1' data-sal="slide-up"
    data-sal-delay="200"
    data-sal-duration='500'
    data-sal-easing="ease"> {text1}</Typography>       
    </Grid>
    <Box
    component={Grid}
    item
    xs={4}
    display={{ xs: "none", lg: "block" }}
    />

    <Box
    component={Grid}
    item
    xs={3}
    display={{ xs: "none", lg: "block" }}
    />
  <Grid item xs={12} sm={4} style={styles.block}>
      <Typography variant='body1' 
      data-sal="slide-right"
      data-sal-delay="300"
      data-sal-duration='500'
      data-sal-easing="ease"> {text2}</Typography>       
    
  </Grid>
     
      <Box
      component={Grid}
      item
      xs={5}
      display={{ xs: "none", lg: "block" }}
      style={styles.bgHex2}
      data-sal="slide-down"
      data-sal-delay="600"
      data-sal-duration='800'
      data-sal-easing="ease"
      />
     
    </Grid>
 
    </Container>
  
  )
}

export default Einobjekt
