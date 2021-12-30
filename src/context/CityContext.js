import { createContext } from "react";

export const CityContext = createContext({ city: {}, setCity: () => {}, setIsLoading: () => {} });