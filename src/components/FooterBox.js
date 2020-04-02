import React from 'react'
import FooterImage from '../assets/images/FootImage.png'
import { Box } from '@material-ui/core';

const styles = {
    root: {
        width:'100%',
        minHeight:'70vh',
        backgroundImage: `url(${FooterImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',


    },
    headImage:{
        maxWidth: '100%',
    }

    }

class  FooterBox extends React.Component {
    render(){
        return(
            <Box
            style={styles.root}>
           
            </Box>
        )
}


} 

export default FooterBox;