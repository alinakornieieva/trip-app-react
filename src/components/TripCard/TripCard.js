import './TripCard.css'

const images = [{
    city: "Berlin",
    imageUrl: "https://s7g10.scene7.com/is/image/stena/20150820_berlin-brandenburg-gate:16-9?ts=1656740748478&dpr=off"
}, { city: "Tokyo", imageUrl: "https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2020/05/akihabara-iStock-484915982-1024x600.jpg" }]

export const TripCard = ({ info }) => {
    const { city, startDate, endDate } = info
    const index = images.findIndex((img) => img.city === city)
    return <div className="card">
        <img src={images[index].imageUrl} alt={city} />
        <h4>{city}</h4>
        <p>{startDate} - {endDate}</p>
    </div>
}