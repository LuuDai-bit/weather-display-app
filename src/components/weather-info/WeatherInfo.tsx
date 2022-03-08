import React from 'react';
import weatherData from "../../dump_data/weather_data.json";

type weatherInfoProps = { weatherOption: string };
type weatherInfoState = { weatherOption: string };

enum WarningLevel {
  SAFE,
  UNSAFE,
  DANGEROUS
};

class WeatherInfo extends React.Component<weatherInfoProps, weatherInfoState> {
  protected temperature: number;
  protected humidity: number;
  protected warningLevel: string;

  constructor(props: weatherInfoProps) {
    super(props);

    this.temperature = weatherData.temperature;
    this.humidity = weatherData.humidity;
    this.warningLevel = WarningLevel[weatherData.warningLevel];

    this.state = {
      weatherOption: ''
    }
  }

  componentWillReceiveProps(props: weatherInfoProps) {
    this.setState({
      weatherOption: props.weatherOption
    })
  }

  render() {
    switch(this.state.weatherOption.toLowerCase()) {
      case 'temperature':
        return (
          <div>
            Temperature: {this.temperature} C
          </div>
        );
      case 'humidity':
        return (
          <div>
            Humidity: {this.humidity}
          </div>
        );
      case 'warningLevel':
        return (
          <div>
            Warning Level: {this.warningLevel}
          </div>
        );
      default:
        return (
          <div>
            Nothing !!!
          </div>
        );
    }
  }
}

export default WeatherInfo;
