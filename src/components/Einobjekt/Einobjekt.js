import React from 'react';
import {Typography,Grid,Container,Box} from '@material-ui/core/';
import BerlinBgCounter from '../../assets/images/BerlinBgCounter.png'
import TransHexagonBg2 from '../../assets/images/TransHexagonBg2.png'
import TransHexagonBg3 from '../../assets/images/TransHexagonBg3.png'



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
    <Box style={styles.root} />
      <Box
      component={Grid}
      item
      xs={6}
      display={{ xs: "none", lg: "block" }}
      style={styles.bgHex1}
      >
      </Box>

      <Grid item xs={12} sm={6} style={styles.texttitle}>
      <Typography variant= 'h3'  style={styles.texttitle1}> {texttitle}</Typography>
      <Typography variant= 'h3'  style={styles.texttitle2}> {texttitle2}</Typography>
      </Grid>
  
      <Box
      component={Grid}
      item
      xs={4}
      display={{ xs: "none", lg: "block" }}
      />
    <Grid item xs={12} sm={4} style={styles.block}>
      <Typography variant='body1' > {text1}</Typography>       
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
      <Typography variant='body1' > {text2}</Typography>       
  </Grid>
  <Box
  component={Grid}
  item
  xs={5}
  display={{ xs: "none", lg: "block" }}
  style={styles.bgHex2}
  >
  </Box>
    </Grid>
    </Container>
  )
}

export default Einobjekt