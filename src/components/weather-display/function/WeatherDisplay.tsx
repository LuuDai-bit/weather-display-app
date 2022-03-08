import { useState } from 'react';
import WeatherDropdown from '../../weather-dropdown-menu/function/WeatherDropdown';
import WeatherInfo from '../../weather-info/function/WeatherInfo';

type weatherDisplayProps = {};

const WeatherDispay = (props: weatherDisplayProps) => {
  const [weatherOption, setWeatherOption] = useState('');

  const updateWeatherOption = (weatherOption: string) => {
    setWeatherOption(weatherOption);
  }

  return (
    <div>
      <WeatherDropdown
        updateWeatherOption={updateWeatherOption}></WeatherDropdown>
      <WeatherInfo weatherOption={weatherOption}></WeatherInfo>
    </div>
  );
}
