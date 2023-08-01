import { TripCard } from "../TripCard/TripCard"
import './Trips.css'

export const Trips = ({ trips, setOpenForm, setTrip }) => {
    return <div className="trips" >
        <div className='cards'>
            {trips.map((info) => <TripCard setTrip={setTrip} key={info.id} info={info} />)}
        </div>
        <div onClick={() => setOpenForm(true)} className="add-new">+ <br /> Add trip</div>
    </div>
}