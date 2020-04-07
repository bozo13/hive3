import React,{ useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './Pagination';
import CarouselBg from './CarouselBg';
import SliderMap from './Slidermap';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import FluidImage from "../../components/FluidImage"
import NonStretchedImage from './NonStretchedImage'


import { ZoomIn, ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { MobileStepper, Paper, Typography, Grid, Box, Button, Container, useTheme ,useMediaQuery } from '@material-ui/core';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const styles = {
  root: {
    position: 'relative',
    clipPath: `polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)`,
    maxHeight:'590px',
    marginTop: '5rem',
  },
  slide: {
    padding: 0,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
  clipPolygon:{
  },
  ZoomIn:{
    position: 'absolute',
    top: '10px',
    width: '100%',
    zIndex: '99',
    color: 'white',
    fontSize: '4rem',
  },
  ArrowBackIos:{ 
    color: 'white',
    fontSize: '3rem',
  },
  ArrowForwardIos:{
    color: 'white',
    fontSize: '3rem',
  },
  Texttitle:{
    margin: '0rem 5rem 5rem -5rem',
    '&h3':{
      marginLeft: '2rem',
      color:'#FF0',
        },
  },
  
  block1:{
      margin: '1.25rem 0.875rem',
      zIndex: '8',
    },
  block2:{
    margin: '3rem -5rem 3rem 5rem',
    zIndex: '9',
  },
  block3:{
    margin: '1.25rem 0.875rem',
    zIndex: '10',
  },
  texttilte1:{
    padding: '0rem',
    zIndex: '11',
  },
  texttilte2:{
    paddingTop: '0rem',
    paddingLeft: '2rem',
    zIndex: '11',
  }
}



class Carousel extends React.Component {

  //Props setting constructor
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
      isOpen: false,
    };
  }
  //end of Props setting constructor
  //lightBox state setting
  /*
  openLightbox() {
    this.setState({ isOpen: true });
  }
  closeLightbox() {
    this.setState({ isOpen: false });
  }
  moveNext() {
    this.setState(prevState => ({
      index: (prevState.index + 1) % images.length,
    }));
  }
  movePrev() {
    this.setState(prevState => ({
      index: (prevState.index + images.length - 1) % images.length,
    }));
  }
  */
 //end of lightBox state setting
 //Swipe state setting
  handleNext = () => {
      this.setState(prevState => ({
        activeStep: prevState.activeStep + 1,
      }));
    };

    handleBack = () => {
      this.setState(prevState => ({
        activeStep: prevState.activeStep - 1,
      }));
    };

    handleStepChange = activeStep => {
      this.setState({ activeStep });
    };
  //end of Swipe state setting


  render() {
    //wordpress Props Mapping Method.
    const {data} = this.props;
    const CarouselItem =this.props.carouselitem;
    const Textfiled1 =this.props.textfiled1
    const Textfiled2 =this.props.textfiled2
    const Textfiled3 =this.props.textfiled3
    const Texttitle =this.props.texttitle
    const Texttitle2 =this.props.texttilte2
    const maxSteps = CarouselItem.length;

    const Images =  CarouselItem 
    const { activeStep,isOpen } = this.state;
    console.log(CarouselItem)
    const array = []

    CarouselItem.forEach(Image =>
      array.push( <NonStretchedImage fluid={Image.carouselimg } />) 
    )
    console.log('name' + typeof(array))


    //end of wordpress Props Mapping Method.

    //lightBox state Mapping Method.
    /*
    let lightbox;
    if (this.state.isOpen) {
      lightbox = (
        <Lightbox
          mainSrc={CarouselItem[this.state.index]}
          nextSrc={CarouselItem[(this.state.index + 1) % images.length]}
          prevSrc={
            CarouselItem[(this.state.index + CarouselItem.length - 1) % CarouselItem.length]
          }
        
          onCloseRequest={this.closeLightbox}
          onMovePrevRequest={this.movePrev}
          onMoveNextRequest={this.moveNext}
          onImageLoadError={App.onImageLoadError}
          imageTitle={titles[this.state.index]}
          imageCaption={captions[this.state.index]}
        />
      );
    }
    */
    //end of lightBox state Mapping Method.





    return (
      
<Container>
      <Grid container>
      <Box
      component={Grid}
      style={styles.bgCarousel}
      item
      xs={1}
      display={{ xs: "none", sm: "block" }}
    ></Box>
      <Grid item xs={12} sm= {5} style={styles.root}> 
      <ZoomIn style={styles.ZoomIn}  onClick={() => this.setState({ isOpen: true })}/>
      {!!isOpen && activeStep !== null && (
        <Lightbox
        enableZoom={false}
        clickOutsideToClose={true}
          mainSrc={array[activeStep]}
          nextSrc={array[(activeStep + 1) % maxSteps]}
          prevSrc={array[(activeStep + maxSteps - 1) % maxSteps]}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              activeStep: (activeStep + maxSteps - 1) % maxSteps,
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              activeStep: (activeStep + 1) % maxSteps,
            })
          }
        />
      )}
        <SwipeableViews index={activeStep}  >

        {CarouselItem.map((Carousel, activeStep) => (
     
          <SliderMap key={activeStep} data={Carousel} />
          
        ))}

        </SwipeableViews>
          <Pagination dots={maxSteps} index={activeStep} onChangeIndex={this.handleStepChange} />
          
          <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              onClick={this.handleNext}
              disabled={activeStep === maxSteps - 1}
            >
            <ArrowForwardIos style={styles.ArrowBackIos}/>
            
            </Button>
          }
          backButton={
            <Button
     
              onClick={this.handleBack}
              disabled={activeStep === 0}
            >
            <ArrowBackIos style={styles.ArrowBackIos}/>
            </Button>
          }
        />
        </Grid>
        <Box
        component={Grid}
        style={styles.bgCarousel}
        item
        xs={1}
        display={{ xs: "none", sm: "block" }}
      >
      <CarouselBg />  

      </Box>
        <Grid item xs={12} md={4} style={styles.freiraum}>
          <Box style={styles.Texttitle}>
            <Typography  variant="h3" style={styles.texttilte1} >{ Texttitle } </Typography>
            <Typography  variant="h3" style={styles.texttilte2} >{ Texttitle2 } </Typography>
          </Box>
          <Box style={styles.block1}>
            <Typography  variant='body1' > 
                {Textfiled1} 
            </Typography>
          </Box>
          <Box style={styles.block2}>
            <Typography  variant="body1" > 
                {Textfiled2} 
            </Typography>
          </Box>
          <Box>
          <Typography  variant="body1" style={styles.block3}> 
              {Textfiled3} 
          </Typography>
        </Box>

          </Grid>
        </Grid>
       
        </Container>
      
    )
  }
}

export default Carousel;
