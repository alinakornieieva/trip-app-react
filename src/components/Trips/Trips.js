import { TripCard } from "../TripCard/TripCard"
import './Trips.css'

export const Trips = ({ trips, setOpenForm }) => {
    return <div className="trips">
        {trips.map((info) => <TripCard info={info} />)}
        <div onClick={() => setOpenForm(true)} className="add-new">+ <br /> Add trip</div>
    </div>
}