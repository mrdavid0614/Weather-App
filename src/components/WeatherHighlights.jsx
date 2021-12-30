import WeatherInfoCard from "./WeatherInfoCard";

const WeatherHighlights = ({ currentWeather }) => {
    return <div className="flex flex-col items-center">
        <h1 className="text-2xl">Today's Highlights</h1>
        
        <div className="grid grid-cols-2 px-5 py-10 gap-10">
            <WeatherInfoCard>
                <p>Wind Status</p>
                <p className="text-6xl">{ Math.round(currentWeather?.wind_speed) }<span className="text-4xl">mph</span></p>
                <div className="flex items-center gap-3">
                    <div className={ `bg-gray-700 rounded-full p-1 text-center transform rotate-[${ Math.round(currentWeather?.wind_direction) }deg] material-icons` }>
                        near_me
                    </div>
                    <p>WSW</p>
                </div>
            </WeatherInfoCard>

            <WeatherInfoCard>
                <p>Humidity</p>
                <p className="text-6xl">{ currentWeather?.humidity || 0 }<span className="text-4xl">%</span></p>
                <input type="range" value={ currentWeather?.humidity || 0 } readOnly/>
            </WeatherInfoCard>

            <WeatherInfoCard>
                <p>Visibility</p>
                <p className="text-6xl">{ Math.round(currentWeather?.visibility) } <span className="text-4xl">miles</span></p>
            </WeatherInfoCard>

            <WeatherInfoCard>
                <p>Air Pressure</p>
                <p className="text-6xl">{ Math.round(currentWeather?.air_pressure) } <span className="text-4xl">mb</span></p>
            </WeatherInfoCard>
        </div>
    </div>
}

export default WeatherHighlights