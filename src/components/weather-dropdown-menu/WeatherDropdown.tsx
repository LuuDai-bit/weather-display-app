import React from 'react';

type weatherDropdownProps = { updateWeatherOption: (weatherOption: string) => void };
type weatherDropdownState = { weatherOption: string };

class WeatherDropdown extends React.Component<weatherDropdownProps, weatherDropdownState> {
  static readonly WEATHER_OPTIONS = ['Temperature', 'Humidity', 'Warning Level'];

  constructor(props: weatherDropdownProps) {
    super(props);
    this.state = {
      weatherOption: ''
    }

    this.changeWeatherOption = this.changeWeatherOption.bind(this);
  }

  changeWeatherOption(event: any) {
    this.setState({weatherOption: event.target.value});
    this.props.updateWeatherOption(event.target.value);
  }

  render() {
    return (
      <div>
        <label htmlFor="">Choose weather you like: </label>
        <select
          name=""
          id="weather-select"
          value={this.state.weatherOption}
          onChange={this.changeWeatherOption}>
          <option value="">Choose an option</option>
          {
            WeatherDropdown.WEATHER_OPTIONS.map( weather_option => {
              return (<option
                key={weather_option}
                value={weather_option}
                >{weather_option}</option>);
            })
          }
        </select>
      </div>
    )
  }
}

export default WeatherDropdown;
