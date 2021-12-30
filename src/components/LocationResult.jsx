import { useContext } from "react";

import { getLocationWeather } from "../api/weatherApi";
import { CityContext } from '../context/CityContext';

const LocationResult = ({ location }) => {
    const { setCity, setIsLoading } = useContext(CityContext)

    const handleOnClick = async () => {
        setIsLoading(true);
        const locationResult = await getLocationWeather(location?.woeid);
        setCity( locationResult );
        setIsLoading(false);
    }

    return <button className="group p-8 w-full flex items-center justify-between border-2 border-transparent hover:border-gray-500 hover:border-2 text-2xl" onClick={ () => handleOnClick()  }>
        <p>{ location?.title }</p> <span className="material-icons-md invisible group-hover:visible text-gray-500">keyboard_arrow_right</span>
    </button>
}

export default LocationResult