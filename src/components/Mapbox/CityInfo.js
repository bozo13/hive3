import React, {PureComponent} from 'react';

const Style ={
  cityInfo:{
    padding: '0.2rem 0.5rem',
  },
  except:{
    color: '#DFA629',
  },
  desc:{
    color: '#232E3C',
  },
}

export default class CityInfo extends PureComponent {
  render() {
    const {info} = this.props;
    const displayName = `${info.name}, ${info.except}`;

    return (
      <div style= { Style.cityInfo}>
       
        <p style= { Style.desc}> {info.description} </p>
        <p style= { Style.except}>{info.except}</p>
      </div>
    );
  }
}