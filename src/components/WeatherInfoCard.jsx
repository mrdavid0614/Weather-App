const WeatherInfoCard = ({ children }) => {
    return <div className="bg-blue-950 flex flex-col items-center rounded gap-5 px-10 py-5">
        { children }
    </div>
}

export default WeatherInfoCard