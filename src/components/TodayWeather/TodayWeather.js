import Timer from '../Timer/Timer';
import './TodayWeather.css'
const images = require.context('../../icons', true);

export const TodayWeather = ({ todayWeather, trip }) => {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]
    const day = days[new Date().getDay()]
    return <>
        {todayWeather && <div className='today-weather'>
            <div className='center'>
                <p className='day'>{day}</p>
                <div>
                    <img src={images(`./${todayWeather.days[0].icon}.png`)} alt={todayWeather.days[0].icon} />
                    <p><span className='temp'>{Math.round(todayWeather.days[0].temp)}</span><span className='celsuis'>°C</span></p>
                </div>
                <p className='adress'>{todayWeather.address}</p>
            </div>
            <Timer deadline={trip.startDate} />
        </div>}
    </>
}