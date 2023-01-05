export const baseUrl =
  "https://raymond-cors-anywhere-production.up.railway.app/https://www.metaweather.com/api/location";

export const getLocationWeather = async (locationId) => {
  try {
    const locationWeather = await (
      await fetch(`${baseUrl}/${locationId}`)
    ).json();
    return locationWeather;
  } catch (error) {
    return {};
  }
};

export const getLocationsWeatherByKeyword = async (keyword) => {
  try {
    const location = await (
      await fetch(`${baseUrl}/search/?query=${keyword}`)
    ).json();
    return location;
  } catch (error) {
    return [];
  }
};
