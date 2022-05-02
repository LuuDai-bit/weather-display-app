import { useEffect, useState } from 'react';
import weatherData from "../../../dump_data/weather_data.json";

type weatherInfoProps = { weatherOption: string };

enum WarningLevel {
  SAFE,
  UNSAFE,
  DANGEROUS
};

const WeatherInfo = (props: weatherInfoProps) => {
  const [weatherOption, setWeatherOption] = useState('');
  const temperature = weatherData.temperature;
  const humidity = weatherData.humidity;
  const warningLevel = WarningLevel[weatherData.warningLevel];

  useEffect(() => {
    setWeatherOption(props.weatherOption.toLowerCase());
  }, [props.weatherOption]);

  switch(weatherOption) {
    case 'temperature':
      return (
        <div>
          Temperature: {temperature}
        </div>
      );
    case 'humidity':
      return (
        <div>
          Humidity: {humidity}
        </div>
      );
    case 'warning level':
      return (
        <div>
          Warning Level: {warningLevel}
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

export default WeatherInfo;
