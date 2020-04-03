import React from "react";
import FluidImage from "../FluidImage";
import ReactPlayer from 'react-player';
import {Container} from '@material-ui/core';


const Style = {
  video:{

  },

}


const Vimeo = ({ placeimage ,videourl, text }) => {

  return (

    <Container style={{ position: "relative", width: '100%'}} id={'Film'}>

       <ReactPlayer  controls
          url={videourl}
          vimeoConfig={{ 
            playerOptions: { 
              autoplay:true,
              maxwidth: '100%',
              controls: true,
            
            },
          }}
        />

    </Container>
  )
}

export default Vimeo
