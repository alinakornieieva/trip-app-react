import { useEffect, useState, useRef } from 'react';
import { Form } from './components/Form/Form';
import { Search } from './components/Search/Search';
import { Trips } from './components/Trips/Trips';
import { Forecast } from './components/Forecast/Forecast';
import './App.css';
import { TodayWeather } from './components/TodayWeather/TodayWeather';

const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) {
      func();
    } else {
      didMount.current = true;
    }
  }, deps);
};

const App = () => {
  const [trips, setTrips] = useState([{ id: 1, city: "Berlin", startDate: "2023-07-17", endDate: "2023-07-26" }, { id: 2, city: "Tokyo", startDate: "2023-08-01", endDate: "2023-08-07" }])
  const [filteredTrips, setFilteredTrips] = useState(trips)
  const [todayWeather, setTodayWeather] = useState(null)
  useEffect(() => {
    setFilteredTrips(trips)
  }, [trips])
  const [trip, setTrip] = useState(null);
  const [forecast, setForecast] = useState(null);
  useDidMountEffect(() => {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${trip.city}/${trip.startDate}/${trip.endDate}?unitGroup=metric&include=days&key=${process.env.REACT_APP_WEATHER_API}&contentType=json`)
      .then((data) => data.json()).then((result) => setForecast(result.days))
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${trip.city}/today?unitGroup=metric&include=days&key=${process.env.REACT_APP_WEATHER_API}&contentType=json`)
      .then((data) => data.json()).then((result) => setTodayWeather(result))
  }, [trip]);
  const [openForm, setOpenForm] = useState(false)
  return <>
    <TodayWeather todayWeather={todayWeather} trip={trip} />
    <div className='container'>
      <h1>Weather <strong>Forecast</strong></h1>
      <Search setFilteredTrips={setFilteredTrips} trips={trips} />
      <Form openForm={openForm} setOpenForm={setOpenForm} setTrips={setTrips} />
      <Trips setOpenForm={setOpenForm} trips={filteredTrips} setTrip={setTrip} trip={trip} />
      <Forecast forecast={forecast} />
    </div>
  </>
}

export default App;