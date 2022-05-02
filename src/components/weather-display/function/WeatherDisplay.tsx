import { useState } from 'react';
import WeatherDropdown from '../../weather-dropdown-menu/function/WeatherDropdown';
import WeatherInfo from '../../weather-info/function/WeatherInfo';

const WeatherDispay = () => {
  const [weatherOption, setWeatherOption] = useState('');

  return (
    <div>
      <WeatherDropdown
        updateWeatherOption={setWeatherOption}></WeatherDropdown>
      <WeatherInfo weatherOption={weatherOption}></WeatherInfo>
    </div>
  );
}

export default WeatherDispay;
