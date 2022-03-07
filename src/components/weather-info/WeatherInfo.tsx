import React from 'react';

type weatherInfoProps = {};
type weatherInfoState = { weatherOption: string };

class WeatherInfo extends React.Component<{}, weatherInfoState> {
  constructor(props: weatherInfoProps) {
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
