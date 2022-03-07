import React from 'react';

class WeatherInfo extends React.Component<{}, {weatherOption: string}> {
  constructor(props: any) {
    super(props);
    this.state = {
      weatherOption: ''
    }
  }

  render() {
    return (
      <div>{this.state.weatherOption}</div>
    );
  }
}

export default WeatherInfo;
