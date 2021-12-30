import { useState } from "react";

import { getLocationsWeatherByKeyword } from "../api/weatherApi";
import LocationResult from "./LocationResult";

const WeatherSearcher = ({ onClick }) => {
    const [ keyword, setKeyword ] = useState('');
    const [ locations, setLocations ] = useState([]);
    const [ error, setError ] = useState('');

    const handleOnSubmit = async event => {
        event.preventDefault();
        const result = await getLocationsWeatherByKeyword( keyword );
        !result.length && setError('Location not found.');
        setLocations( result );
    }

    const handleOnKeywordChange = event => {
        const { value } = event.target;
        setKeyword( value )
    }

    return <div className="p-5 flex flex-col gap-5 h-screen">
        <div className="flex justify-end">
            <button className="material-icons" onClick={ () => onClick() }>close</button>
        </div>
        <form onSubmit={ handleOnSubmit } className="relative flex gap-5">
            <span className="absolute top-[20px] left-[10px] material-icons">search</span>
            <input type="text" className="pl-10 outline-none border-2 border-solid border-white bg-blue-950" placeholder="search location" onChange={ handleOnKeywordChange } />
            <button className="p-5 bg-[#3C47E9]">Search</button>
        </form>
        <div className="flex flex-col gap-1">
            {
                locations.length
                ? locations.map( location => <LocationResult location={ location } key={ location?.woeid } /> )
                : error && <p>{ error }</p>
            }
        </div>
    </div>
}

export default WeatherSearcher