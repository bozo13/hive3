
import React, {PureComponent} from 'react';
import {Marker} from 'react-map-gl';
import { Style } from '@material-ui/icons';
import  MapboxMarker  from '../../assets/svg/mapboxMarker.svg'
import  MapboxMarker2  from '../../assets/images/HiveMapMarker.png'


const ICON = `10 0, 20 5, 20 15, 10 20, 0 15, 0 5`;

const SIZE = 36;

const styles = {
  marker:{

    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
    minWidth: '36px',
    minHeight: '36px',
    color: '#DFA629',
  }

}

// Important for perf: the markers never change, avoid rerender when the map viewport changes
export default class Pins extends PureComponent {
  render() {
    const {data, onClick} = this.props;

    return data.map((city, index) => (
    
        <Marker key={`marker-${index}`} 
                longitude={city.longitude} 
                latitude={city.latitude}
                style={{
                  alignSelf: 'center',
                  justifySelf: 'center',
                 }}
                >

          <p style={{   
            backgroundImage:`url(${MapboxMarker2 })`,
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            color: '#DFA629',
            textAlign: 'center',
            fontSize: '0.725rem', 
            fontWeight: 'Bold', 
            minWidth: '36px',
            padding:'5px',
            justifySelf: 'center',
            alignSelf: 'center',
            transform: `translate(${-SIZE / 2 + 0}px,${-SIZE + 2}px)`,

            
          }} onClick={() => onClick(city) } 
          > {index +1 }
        </p>
      </Marker>
    ));
  }
}

/*
<svg
height={SIZE}
viewBox="0 0 36 36"
style={{
  cursor: 'pointer',
  fill: '#FFF',
  stroke: '#DFA629',
  strokeWidth:"2",
  transform: `translate(${-SIZE / 2 + 0}px,${-SIZE + 2}px)`,
}}
onClick={() => onClick(city)}
>
<polygon points={ICON} ></polygon>
</svg>
*/