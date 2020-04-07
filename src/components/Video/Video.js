import React from "react";
import FluidImage from "../FluidImage";

import {Container, Grid,Box, TransitionProps, Slide, Button,Dialog, AppBar, Toolbar , IconButton} from '@material-ui/core';
import {Close } from '@material-ui/icons'

import Vimeo from '@u-wave/react-vimeo';


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
    <Button  onClick={handleClickOpen}>
         onClick
    </Button>
    <Vimeo 
        video="386921713"
        width= '100%'
        height='100%'
        responsive = 'true' controls = 'false'
        />
    </Grid>
    <Dialog fullWidth maxWidth    open={open} onClose={handleClose} TransitionComponent={Transition} style={{

    }}>
 
        <Vimeo 
        video="386921713"
        width= '1280px'
        height='960px'
        responsive = 'true'
        controls = 'false'
        style={{
        
         }}
        />
        </Dialog>
    </Container>
  )
}

export default Video
