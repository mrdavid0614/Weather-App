import getFormattedDate from './formatDate';

export function getWeatherDate(date, format = "") {
    if(date) {
        date = date.replace(/-/g, '/');
        date = typeof date.getDate !== 'function' ? new Date(date) : date;

        const formattedDate = getFormattedDate(date, format);
        return formattedDate;
    }

    return '';
}