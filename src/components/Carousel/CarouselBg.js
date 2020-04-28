import React from 'react';
import transHexagonBg from '../../assets/svg/TransHexagonBg.svg'
import {Grid,Box} from '@material-ui/core'

const styles = {
  root: {

  },
  bgCarousel:{
    position: 'absolute',
    zIndex: '0',
    marginLeft: '-150px',
    marginTop: '450px',
    
},
    Bgimg:{
        width: '270px',
        height: '252px',
    }
  }



class CarouselBg extends React.Component {
  
  render() {
  
    return (
  
     
        <Box
        data-sal="slide-left"
        data-sal-delay="800"
        data-sal-duration='1000'
        data-sal-easing="ease"
        component={Grid}
        style={styles.bgCarousel}
        item
        xs={3}
        display={{ xs: "none", sm: "block" }}
      >
                 <img src={transHexagonBg} alt= {transHexagonBg} style={styles.Bgimg}/>
       </Box>
     
      
    )
  }
}

export default CarouselBg;


