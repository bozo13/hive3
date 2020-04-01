import React from 'react'
import HeadingImage from '../assets/images/HeadImage.jpg'
import { Box, Grid,Container }  from '@material-ui/core';
import Biglogo from '../assets/svg/hiveBigLogo.svg'
import FluidImage from "./FluidImage"


const styles = {
    root: {
        width:'100%',
        height:'100vh',
        backgroundImage: `url(${HeadingImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
    },
    headlogo: {
        width:'100%',
        height:'100vh',
        backgroundImage: `url(${Biglogo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
    },
    headImage:{
        maxWidth: '100%',
    }

    }

class  HeadTtile extends React.Component {
    render(){
        return(
            <Box
            style={styles.root}>
            <Container>
            <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            >
            <Grid item xs={3} sm={2}  style={{margin:'0 auto', maxWidth:'100%',textAlign:'center', marginTop:'30%' }}>
                <img src={Biglogo} style={{margin:'0 auto', maxWidth:'100%',textAlign:'center'}} />
            </Grid>
            </Grid>
            </Container>
            </Box>
        )
}


} 

export default HeadTtile;