
import React, {PureComponent} from 'react';
import FluidImage from "../../components/FluidImage"
import GatsbyImage from 'gatsby-image';
import { Card } from '@material-ui/core';
import Styles from "./Carousel.module.scss"


// Important for perf: the markers never change, avoid rerender when the map viewport changes
export default class Slidemap extends PureComponent {
  render() {
    const {data} = this.props;

    return(
        <Card >
        <FluidImage image={data.carouselimg}  className={ Styles.FluidImage}/>
        </Card>
   
  
    );
  }
}