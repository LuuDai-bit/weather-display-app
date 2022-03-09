import { useEffect, useState } from 'react';
import weatherData from "../../../dump_data/weather_data.json";

type weatherInfoProps = { weatherOptions: string[] };

enum WarningLevel {
  SAFE,
  UNSAFE,
  DANGEROUS
};

const WeatherInfo = (props: weatherInfoProps) => {
  const [weatherOptions, setWeatherOptions] = useState<string[]>([]);
  const temperature = weatherData.temperature;
  const humidity = weatherData.humidity;
  const warningLevel = WarningLevel[weatherData.warningLevel];

  useEffect(() => {
    setWeatherOptions(props.weatherOptions);
  }, [props.weatherOptions]);

  console.log(weatherOptions);
  return (
    <div>
      { weatherOptions.includes('temperature') && <div>Temperature: {temperature}</div> }
      { weatherOptions.includes('humidity') && <div>Humidity: {humidity}</div> }
      { weatherOptions.includes('warning level') && <div>Warning Level: {warningLevel}</div> }
    </div>
  );
}

export default WeatherInfo;
