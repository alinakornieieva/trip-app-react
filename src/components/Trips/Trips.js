import { useRef } from "react"
import { TripCard } from "../TripCard/TripCard"
import './Trips.css'

export const Trips = ({ trips, setOpenForm, setTrip, trip }) => {
    const ref = useRef(null)
    const handleScroll = (offset) => {
        if (ref.current) {
            ref.current.scrollLeft += offset;
        }
    }
    return <>
        <div className="trips" >
            <div ref={ref} className={`cards ${trips.length > 2 && 'scroll'}`}>
                {trips.map((info) => <TripCard setTrip={setTrip} key={info.id} info={info} trip={trip} />)}
            </div>
            <div onClick={() => setOpenForm(true)} className="add-new">+ <br /> Add trip</div>
        </div>
        {trips.length > 2 && <div className="trips-btns">
            <button onClick={() => handleScroll(-340)}>Prev</button>
            <button onClick={() => handleScroll(340)}>Next</button>
        </div>}
    </>
}