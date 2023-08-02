import { useState } from "react"

export const Search = ({ setFilteredTrips, trips }) => {
    const [search, setSearch] = useState("")
    const onInputChange = (e) => {
        setSearch(e.target.value)
        setFilteredTrips(trips.filter((el) => {
            if (e.target.value === '') {
                return el;
            }
            else {
                return el.city.toLowerCase().startsWith(search.toLowerCase())
            }
        })
        )
    }
    return <div>
        <input value={search} onChange={onInputChange}
            style={{ padding: '5px 15px 5px 5px', marginTop: '20px' }} type="text" placeholder="Search your trip" />
    </div>
}