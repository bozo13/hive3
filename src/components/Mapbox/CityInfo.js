import React, {PureComponent} from 'react';

export default class CityInfo extends PureComponent {
  render() {
    const {info} = this.props;
    const displayName = `${info.name}, ${info.except}`;

    return (
      <div>
        <h1>{displayName}</h1>
        <p> {info.description} </p>
      </div>
    );
  }
}