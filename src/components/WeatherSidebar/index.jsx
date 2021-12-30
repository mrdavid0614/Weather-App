import { useState } from "react";

import WeatherSearcher from "../WeatherSearcher";
import CurrentWeather from "../CurrentWeather";
import "./index.css"

const WeatherSidebar = () => {
    const [ isSearching, setIsSearching ] = useState(false);

    const handleOnClick = () => {
        setIsSearching( !isSearching );
    }

    return (
        <aside className="bg-blue-950 w-screen md:w-4/12">
            {
                isSearching
                ? <WeatherSearcher onClick={ handleOnClick } />
                : <CurrentWeather onClick={ handleOnClick } />
            }
        </aside>
    )
}

export default WeatherSidebar;