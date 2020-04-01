
import React, {PureComponent} from 'react';
import FluidImage from "../../components/FluidImage"
import GatsbyImage from 'gatsby-image';
import { Card } from '@material-ui/core';



// Important for perf: the markers never change, avoid rerender when the map viewport changes
export default class Slidemap extends PureComponent {
  render() {
    const {data} = this.props;

    return(
        <Card >
        <FluidImage image={data.carouselimg} style={{ width: `100%`, height: `100% ` }}/>
        </Card>
   
  
    );
  }
}