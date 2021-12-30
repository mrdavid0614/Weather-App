import { useState, useEffect } from 'react';

import { WeatherContext } from './context/WeatherContext';
import { CityContext } from './context/CityContext';
import { baseUrl } from "./api/weatherApi";

import Spinner from './components/Spinner';
import WeatherContent from './components/WeatherContent';
import WeatherSidebar from './components/WeatherSidebar';

function App() {
  const [ city, setCity ] = useState({ consolidated_weather: [] });
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState('You should grant the use of your location.');
  const [ weatherMetrics, setWeatherMetrics ] = useState(localStorage.getItem('metrics') || 'C');

  useEffect(() => {
    const onSuccessPosition = async ({ coords }) => {
      setError('')
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
  }, []);

  return (
    <main
      className={ error
                  ? `px-16 py-60 flex justify-center items-center text-slate-50`
                  : 
                  `flex flex-col md:flex-row h-full text-slate-50`
                }>
        {
          error
          ? <p className="text-2xl">{ error }</p>
          :
          isLoading
            ? <Spinner />
            : <CityContext.Provider value={{ city, setCity, setIsLoading }} >
                <WeatherContext.Provider value={{ weatherMetrics, setWeatherMetrics }} >
                  <WeatherSidebar />
                  <WeatherContent weathers={ city?.consolidated_weather } />
                </WeatherContext.Provider>
            </CityContext.Provider>
        }
    </main>
  )
}

export default App
