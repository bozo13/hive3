import React from "react";
import FluidImage from "../FluidImage";

import {Container, Grid,Box, TransitionProps, Slide, Button,Dialog, AppBar, Toolbar , IconButton} from '@material-ui/core';
import {Close } from '@material-ui/icons'
import PlayButton from '../../assets/svg/playButton.svg'
import Vimeo from '@u-wave/react-vimeo';


const styles ={
  PlayButton:{
    position: "absolute",
    top: `calc( 50% - 20px )`,
    left: "50%",
    width: '90px',
    height: '104px',
    transform: "translate(-50%, -50%)",
    textAlign: 'center',
    lineHeight: 1,
    backgroundImage: `url(${PlayButton})`
  }
}


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const Video = ({ placeimage ,videourl, text }) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 

  return (

  
    <Container style={{ position: "relative", width: '100%'}} id={'Film'}>
    <Grid item xs={12}  my={5}>
     

    <FluidImage image={placeimage} />
    <Button  onClick={handleClickOpen}  style={styles.PlayButton}/>
    </Grid>
    <Dialog fullWidth maxWidth  open={open} onClose={handleClose} TransitionComponent={Transition} style={{

    }}>
 
        <Vimeo  
        video={videourl}
        width= '1280px'
        height='960px'
        responsive = 'true'
        controls = 'true'
        autoplay = 'true'
        style={{
        
         }}
        />
        </Dialog>
    </Container>
  )
}

export default Video
