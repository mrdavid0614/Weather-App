import { useContext } from 'react'

import { WeatherContext } from '../context/WeatherContext'
import MetricButton from './MetricButton'

const Navbar = () => {
    const { weatherMetrics, setWeatherMetrics } = useContext(WeatherContext)

    const handleOnClick = event => {
        const metric = event.target.textContent.replace('º', '')
        setWeatherMetrics(metric)
        localStorage.setItem('metrics', metric)
    }

    return <nav className='mt-[42px] md:mr-24 flex justify-center md:justify-end gap-2'>
        <MetricButton text="ºC" onClick={ handleOnClick } isActive={ weatherMetrics === 'C' } ></MetricButton>
        <MetricButton text="ºF" onClick={ handleOnClick } isActive={ weatherMetrics === 'F' } ></MetricButton>
    </nav>
}

export default Navbar