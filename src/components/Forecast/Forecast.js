import './Forecast.css'
const images = require.context('../../icons', true);

export const Forecast = ({ forecast }) => {
    const convert = (date) => {
        date = date.split('-').reverse().join('.')
        return date
    }
    return <>
        {forecast && <>
            <h2>Week</h2>
            <div className={`forecast ${forecast.length > 8 && 'changed-width'}`}>
                {forecast.map((day) => <div className="forecast-card" key={day.datetime}>
                    <p>{convert(day.datetime)}</p>
                    <img src={images(`./${day.icon}.png`)} alt={day.icon} />
                    <p>{Math.round(day.tempmax)}°C/{Math.round(day.tempmin)}°C</p>
                </div>)}
            </div></>
        }
    </>
}