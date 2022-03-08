import { useState } from 'react';

type weatherDropdownProps = { updateWeatherOption: (weatherOption: string) => void };

const WeatherDropdown = (props: weatherDropdownProps) => {
  const [weatherOption, setWeatherOption] = useState('');

  const WEATHER_OPTIONS = ['Temperature', 'Humidity', 'Warning Level'];

  const changeWeatherOption = (weatherOption: string) => {
    props.updateWeatherOption(weatherOption);
    setWeatherOption(weatherOption);
  }

  return (
    <div>
      <label htmlFor="">Choose weather you like: </label>
      <select
        name=""
        id="weather-select"
        value={weatherOption}
        onChange={() => changeWeatherOption(weatherOption)}>
        <option value="">Choose an option</option>
        {
          WEATHER_OPTIONS.map( weather_option => {
            return (<option
              key={weather_option}
              value={weather_option}
              >{weather_option}</option>);
          })
        }
      </select>
    </div>
  );
}

export default WeatherDropdown;
