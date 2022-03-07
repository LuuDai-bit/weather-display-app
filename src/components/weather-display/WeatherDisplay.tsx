import React from "react";
import WeatherDropdown from "../weather-dropdown-menu/WeatherDropdown";
import WeatherInfo from "../weather-info/WeatherInfo";

type weatherDisplayProps = {};
type weatherDisplayState = { weatherOption: string };

class WeatherDisplay extends React.Component<weatherDisplayProps, weatherDisplayState> {
  constructor(props: weatherDisplayProps) {
    super(props);
    this.state = {
      weatherOption: ''
    }
    this.updateWeatherOption = this.updateWeatherOption.bind(this);
  }

  updateWeatherOption(weatherOption: string) {
    this.setState({weatherOption: weatherOption});
  }

  render() {
    return (
      <div>
        <WeatherDropdown
          updateWeatherOption={this.updateWeatherOption}></WeatherDropdown>
          <p>{this.state.weatherOption}</p>
        <WeatherInfo></WeatherInfo>
      </div>
    );
  }
}

export default WeatherDisplay;
