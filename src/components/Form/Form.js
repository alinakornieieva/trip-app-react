import { useState } from 'react'
import './Form.css'

export const Form = ({ openForm, setOpenForm }) => {
    const [city, setCity] = useState("")
    const cancel = (e) => {
        e.preventDefault()
        setOpenForm(false)
    }
    return <form className={`trip-form ${openForm || 'hidden'}`}>
        <h3>Create trip</h3>
        <hr />
        <div className='inputs'>
            <div className='flex'>
                <label htmlFor="city"><span className='necessarily'>*</span> City</label>
                <select name="city" id="city" value={city} onChange={(e) => console.log(e.target.value)}>
                    <option value="" disabled hidden>Please select a city</option>
                    <option value="Berlin">Berlin</option>
                    <option value="Tokyo">Tokyo</option>
                    <option value="Barcelona">Barcelona</option>
                </select>
            </div>
            <div className='flex'>
                <label htmlFor="start-date"><span className='necessarily'>*</span> Start date</label>

                <input type="input" name="start-date" id="start-date"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")} placeholder="Select date" />
            </div>
            <div className='flex'>
                <label htmlFor="end-date"><span className='necessarily'>*</span> End date</label>

                <input type="input" name="end-date" id="end-date" onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")} placeholder="Select date" />
            </div>
            <div className="btns">
                <button onClick={cancel} className='cancel-btn'>Cancel</button>
                <button className='save-btn'>Save</button>
            </div>
        </div>

    </form>
}