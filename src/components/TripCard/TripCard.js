import { data } from '../../data'
import './TripCard.css'

export const TripCard = ({ info, setTrip, trip }) => {
    const { city, startDate, endDate } = info
    const convert = (date) => {
        date = date.split('-').reverse().join('.')
        return date
    }
    const start = convert(startDate)
    const end = convert(endDate)
    const index = data.findIndex((img) => img.city === city)
    return <div onClick={() => setTrip(info)} className={`card ${trip?.id === info.id && 'selected'}`}>
        <img src={data[index].imageUrl} alt={city} />
        <div>
            <h4>{city}</h4>
            <p>{start} - {end}</p>
        </div>
    </div>
}