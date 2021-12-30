import { useTemperature } from '../hooks/useTemperature';

import { getWeatherIcon } from '../utils/getWeatherIcon';
import { getWeatherDate } from '../utils/getWeatherDate';

const WeatherCard = ({ weather }) => {
    const [ max_temp, min_temp ] = useTemperature(weather.max_temp, weather.min_temp);

    const icon = getWeatherIcon(weather.weather_state_name);
    const applicableDate = getWeatherDate(weather.applicable_date);

    return (
        <div className="w-[140px] bg-blue-950 p-4 flex flex-col justify-between gap-5 items-center">
            <p>{ applicableDate }</p>
            <img src={ icon } alt={ weather.weather_state_name } className='w-16' />
            <div className='flex gap-10'>
                <p className='font-bold'>{ max_temp }</p>
                <p>{ min_temp }</p>
            </div>
        </div>
    )
}

export default WeatherCard;
