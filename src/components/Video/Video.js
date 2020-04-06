import React from "react";
import FluidImage from "../FluidImage";

import {Container, Grid, TransitionProps, Slide, Button,Dialog, AppBar, Toolbar , IconButton} from '@material-ui/core';
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
        responsive = 'true'
        />
    </Grid>
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
    <AppBar >
          <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <Close />
          </IconButton>
         
          <Button autoFocus color="inherit" onClick={handleClose}>
            close
          </Button>
        </Toolbar>
      </AppBar>
       <Vimeo 
        video="386921713"
        width= '100%'
        height='100%'
        responsive = 'true'
        />
        </Dialog>
    </Container>
  )
}

export default Video
