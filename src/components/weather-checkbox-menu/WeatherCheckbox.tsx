import { useState } from 'react';

type WeatherCheckboxProps = { updateWeatherOptions: (weatherOption: string[]) => void };

const WeatherCheckbox = (props: WeatherCheckboxProps) => {
  const [weatherOptions, setWeatherOptions] = useState<string[]>([]);

  const weatherOptionS = ['Temperature', 'Humidity', 'Warning Level'];

  const updateWeatherOptions = (event: any) => {
    let newWeatherOptions: string[] = [];
    if(!weatherOptions.includes(event.target.value.toLowerCase())) {
      newWeatherOptions = [...weatherOptions, event.target.value.toLowerCase()];
      setWeatherOptions(newWeatherOptions);
    } else {
      newWeatherOptions = weatherOptions.filter(option => option != event.target.value.toLowerCase());
      setWeatherOptions(newWeatherOptions);
    }
    props.updateWeatherOptions(newWeatherOptions);
  };

  return (
    <div>
      {
        weatherOptionS.map( weatherOption => {
          return (
            <div className="form-check" key={weatherOption}>
              <input
                className="form-check-input"
                type="checkbox"
                value={weatherOption}
                id="flexCheckDefault"
                onChange={updateWeatherOptions} />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {weatherOption}
              </label>
            </div>
          );
        })
      }

    </div>
  );
}

export default WeatherCheckbox;
