import React, {PureComponent} from 'react';
import {render} from 'react-dom';
import MapGL, {Popup, NavigationControl, FullscreenControl, ScaleControl, Marker} from 'react-map-gl';
import { useStaticQuery, graphql } from "gatsby"
import { mapboxcontainer } from "./Mapbox.data"
import ControlPanel from './Control-panel';
import Pins from './Pins';
import {Grid, Container} from '@material-ui/core'
import CityInfo from './CityInfo';


const TOKEN = 'pk.eyJ1IjoiY2FkbWFuLXRodiIsImEiOiJ0dFlfWEp3In0.XxUaMZBej11GGAnlSl_vMw';
const CITIES = {mapboxcontainer};

const fullscreenControlStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

const navStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  padding: '10px'
};

const scaleControlStyle = {
  position: 'absolute',
  bottom: 36,
  left: 0,
  padding: '10px'
};
const mapboxBorder = {
  border: `6px solid #F8C05E`,
}


// PureComponent ensures that the markers are only rerendered when data changes
class Markers extends PureComponent {
  render() {
    const {data} = this.props;
    return data.map(
      city => 
      <Marker key={city.name} longitude={city.longitude} latitude={city.latitude} >
        <h1>Pins</h1>
      </Marker>
    )
  }
}
class Mapbox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 52.503086,
        longitude:13.454428,
        zoom: 14,
        bearing: 0,
        pitch: 0,
        scrollZoom: false,
      },
      popupInfo: null
    };
  }

  _updateViewport = viewport => {
    this.setState({viewport});
  };

  _onClickMarker = city => {
    this.setState({popupInfo: city});
  };

  _renderPopup() {
    const {popupInfo} = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={6}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({popupInfo: null})}
        >
        <CityInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    const {viewport} = this.state;
    const dataed = this.props.mapboxcontainer;
    console.log(dataed)
    console.log(CITIES)
    

    return (
    <Container>
    <Grid container  >
      <Grid item xs={12} style={mapboxBorder}>
      <MapGL
        {...viewport}
        width="100%"
        height="600px"
   
        mapStyle="mapbox://styles/cadman-thv/ck5s3lae63cxg1ismjou9i51g"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={TOKEN}
        scrollZoom= {false}

      >
     
      <Pins data={dataed} onClick={this._onClickMarker} />

      {this._renderPopup()}

      <div style={fullscreenControlStyle}>
      <FullscreenControl />
    </div>
    <div style={navStyle}>
      <NavigationControl />
    </div>
    <div style={scaleControlStyle}>
      <ScaleControl />
    </div>
    </MapGL>
    </Grid>
    </Grid>
    </Container>
    );
  }
}




export default Mapbox;