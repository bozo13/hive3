
import React, {PureComponent} from 'react';
import {Marker} from 'react-map-gl';

const ICON = `10 0, 20 5, 20 15, 10 20, 0 15, 0 5`;

const SIZE =20;

// Important for perf: the markers never change, avoid rerender when the map viewport changes
export default class Pins extends PureComponent {
  render() {
    const {data, onClick} = this.props;

    return data.map((city, index) => (
    
        <Marker key={`marker-${index}`} longitude={city.longitude} latitude={city.latitude}>
          <svg
            height={SIZE}
            viewBox="0 0 24 24"
            style={{
              cursor: 'pointer',
              fill: '#FFF',
              stroke: '#DFA629',
              strokeWidth:"2",
              transform: `translate(${-SIZE / 2 + 0}px,${-SIZE + 2}px)`
            }}
            onClick={() => onClick(city)}
          >
          <polygon points={ICON} ></polygon>
        </svg>
      </Marker>
    ));
  }
}