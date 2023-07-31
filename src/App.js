import { useState } from 'react';
import { Form } from './components/Form/Form';
import { Search } from './components/Search/Search';
import { Trips } from './components/Trips/Trips';
import './App.css';

const App = () => {
  const [trips, setTrips] = useState([{ id: 1, city: "Berlin", startDate: "17.07.2023", endDate: "21.07.2023" }, { id: 2, city: "Tokyo", startDate: "17.07.2023", endDate: "21.07.2023" }])
  const [openForm, setOpenForm] = useState(false)
  return <div>
    <h1>Weather <strong>Forecast</strong></h1>
    <Search />
    <Form openForm={openForm} setOpenForm={setOpenForm} />
    <Trips setOpenForm={setOpenForm} trips={trips} />
    <h2>Week</h2>
  </div>
}

export default App;
