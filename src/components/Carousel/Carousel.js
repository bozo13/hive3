import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './Pagination';
import CarouselBg from './CarouselBg';
import SliderMap from './Slidermap'
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';


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
  ArrowBackIosIcon:{ 
    color: 'white',
    fontSize: '3rem',
  },
  ArrowForwardIosIcon:{
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
  texttilte2:{
    paddingLeft: '2rem',
    zIndex: '11',
  }
}



class Carousel extends React.Component {
  state = {
    activeStep: 0,
  };

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


  render() {
    const CarouselItem =this.props.carouselitem;
    const Textfiled1 =this.props.textfiled1
    const Textfiled2 =this.props.textfiled2
    const Textfiled3 =this.props.textfiled3
    const Texttitle =this.props.texttitle
    const Texttitle2 =this.props.texttilte2
    console.log(CarouselItem)
    const maxSteps = CarouselItem.length;
    const { activeStep } = this.state;

    return (
      

      <Grid 
      container
      >
      <Box
      component={Grid}
      style={styles.bgCarousel}
      item
      xs={1}
      display={{ xs: "none", sm: "block" }}
    ></Box>
      <Grid item xs={12} sm= {5} style={styles.root}> 
      <ZoomInIcon style={styles.ZoomIn}/>
        <AutoPlaySwipeableViews index={activeStep} onChangeIndex={this.handleStepChange}  >

        {CarouselItem.map((Carousel, activeStep) => (
          <SliderMap key={activeStep} data={Carousel} ></SliderMap>
        ))}
        </AutoPlaySwipeableViews>
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
            <ArrowForwardIosIcon style={styles.ArrowBackIosIcon}/>
            
            </Button>
          }
          backButton={
            <Button
     
              onClick={this.handleBack}
              disabled={activeStep === 0}
            >
            <ArrowBackIosIcon style={styles.ArrowBackIosIcon}/>
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
            <Typography  variant="h3"  >{ Texttitle } </Typography>
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
      
    )
  }
}

export default Carousel;




/*
<div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
<div style={Object.assign({}, styles.slide, styles.slide2)}>slide n°2</div>
<div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
*/