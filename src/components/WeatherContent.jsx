import Navbar from "./Navbar";

import WeatherCard from "./WeatherCard";
import WeatherHighlights from "./WeatherHighlights";
import Footer from "./Footer";

const WeatherContent = ({ weathers }) => {
    return <>
        <section className="bg-blue-1000 w-full">
            <Navbar />
            <div className="grid grid-cols-2 pl-10 md:pl-0 md:flex gap-5 md:justify-center pt-10 pb-10">
                {
                    weathers.slice(1, weathers.length).map( weather => <WeatherCard weather={ weather } key={ weather.id }/>)
                }
            </div>

            <WeatherHighlights currentWeather={ weathers[0] } />
            <Footer />
        </section>
    </>
}

export default WeatherContent;