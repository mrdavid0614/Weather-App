import { useContext, useEffect } from "react";

import { WeatherContext } from "../context/WeatherContext";

export function useTemperature (...temperatures) {
    const { weatherMetrics } = useContext(WeatherContext);
    
    if (weatherMetrics === 'F') {
        return temperatures.map(temp => {
            const degFarenheit = (temp * 9/5) + 32;
            return `${ Math.round(degFarenheit) }ºF`;
        });
    }

    return temperatures.map(temp => `${ Math.round(temp) }ºC`);
}