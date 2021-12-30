import * as images from '../assets/images'

export function getWeatherIcon (name = "") {
    const clearedName = name.split(' ').join('');
    const icon = images[ clearedName ]?.default;
    return icon;
}