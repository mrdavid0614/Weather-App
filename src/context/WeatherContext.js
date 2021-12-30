import { createContext } from "react";

export const WeatherContext = createContext({ weatherMetrics: 'C', setWeatherMetrics: () => {} });