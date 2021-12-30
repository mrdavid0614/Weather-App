import { useContext } from "react";
import { useTemperature } from "../hooks/useTemperature";

import { getWeatherDate } from "../utils/getWeatherDate";
import { getWeatherIcon } from "../utils/getWeatherIcon";
import { CityContext } from '../context/CityContext';
import { baseUrl } from "../api/weatherApi";

const CurrentWeather = ({ onClick }) => {
    const { city, setCity, setIsLoading } = useContext(CityContext);
    const todayWeather = city?.consolidated_weather[0];
    const applicableDate = getWeatherDate(todayWeather?.applicable_date, "normal");
    const icon = getWeatherIcon(todayWeather?.weather_state_name);
    const cityName = city?.title;
    let [ temp ] = useTemperature(todayWeather?.max_temp);

    temp = temp.split('º');

    const handleOnClick = () => {
        const onSuccessPosition = async ({ coords }) => {
            setIsLoading(true);
            const [ mostSimilarLocation ] = await (await (fetch(`${ baseUrl }/search/?lattlong=${ coords.latitude },${ coords.longitude }`))).json();
            const locationWeather = await (await (fetch(`${ baseUrl }/${ mostSimilarLocation.woeid }`))).json();
            setCity( locationWeather );
            setIsLoading(false);
          }
      
          const onErrorPosition = error => {
            setError(error.message);
          }
      
          navigator.geolocation.getCurrentPosition( onSuccessPosition, onErrorPosition )
    }

    return <div className="pb-10">
            <div className="px-5 pt-8 flex justify-between">
                <button
                    className="px-3 py-2 outline-none bg-gray-500 shadow-md shadow-slate-900 hover:bg-gray-600"
                    onClick={ () => onClick() }
                >
                    Search for places
                </button>
                <button
                    className="px-3 py-2 outline-none bg-gray-500 shadow-md shadow-slate-900 rounded-full material-icons hover:bg-gray-600"
                    onClick={ () => handleOnClick() }
                >
                    gps_fixed
                </button>
            </div>
            <div className="w-full h-72 relative mt-12 flex items-center justify-center">
                <div className="w-full h-full absolute opacity-10 bg-cover bg-center bg-cloud"></div>
                <img src={ icon } alt={ todayWeather?.weather_state_name } className="w-40" />
            </div>
            <div className="sm:mt-6 md:mt-10 flex flex-col gap-14 items-center">
                <p className="text-8xl">{ temp[0] }<span className="text-4xl text-gray-500">º{ temp[1] }</span></p>
                <p className="text-2xl text-gray-400">{ todayWeather?.weather_state_name }</p>
            </div>
            <div className="mt-10 flex flex-col gap-5 items-center ">
                <p className="text-gray-400">Today • { applicableDate }</p>
                <p className="text-gray-400 text-center"><span className="material-icons">location_on</span> { cityName }</p>
            </div>
        </div>
}

export default CurrentWeather