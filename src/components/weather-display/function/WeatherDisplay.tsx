import { useState } from 'react';
import WeatherCheckbox from '../../weather-checkbox-menu/WeatherCheckbox';
import WeatherInfo from '../../weather-info/function/WeatherInfo';

const WeatherDispay = () => {
  const [weatherOptions, setWeatherOptions] = useState<string[]>([]);

  return (
    <div>
      <WeatherCheckbox
        updateWeatherOptions={setWeatherOptions}></WeatherCheckbox>
      <WeatherInfo weatherOptions={weatherOptions}></WeatherInfo>
    </div>
  );
}

export default WeatherDispay;
