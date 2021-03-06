import React from 'react'
import HeadingImage from '../assets/images/HeadImage.jpg'
import { Box, Grid,Container }  from '@material-ui/core';
import Biglogo from '../assets/svg/hiveBigLogo.svg'
import FluidImage from "./FluidImage"
import Styles from './HeaderTitle.module.scss'


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
            style={styles.root} >
            <Container>
            <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            className = {Styles.Container}
            >
            <Grid item xs={5} sm={2} className ={Styles.logoContainer}>
                <img src={Biglogo} className ={Styles.Biglogo}  
                data-sal="fade"
                data-sal-delay="1000"
                data-sal-duration='1000'
                data-sal-easing="ease"/>
            </Grid>
            </Grid>
            </Container>
            </Box>
        )
}


} 

export default HeadTtile;