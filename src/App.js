import { useEffect, useState, useRef } from 'react';
import { Form } from './components/Form/Form';
import { Search } from './components/Search/Search';
import { Trips } from './components/Trips/Trips';
import { Forecast } from './components/Forecast/Forecast';
import { TodayWeather } from './components/TodayWeather/TodayWeather';
import './App.css';

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
  const [trips, setTrips] = useState(JSON.parse(localStorage.getItem('data')) || [{ id: 1, city: "Berlin", startDate: "2023-08-10", endDate: "2023-08-16" }])
  const [filteredTrips, setFilteredTrips] = useState(trips)
  const [todayWeather, setTodayWeather] = useState(null)
  const [trip, setTrip] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [openForm, setOpenForm] = useState(false)
  useEffect(() => {
    setFilteredTrips(trips)
    localStorage.setItem('data', JSON.stringify(trips))
  }, [trips])
  useDidMountEffect(() => {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${trip.city}/${trip.startDate}/${trip.endDate}?unitGroup=metric&include=days&key=${process.env.REACT_APP_WEATHER_API}&contentType=json`)
      .then((data) => data.json()).then((result) => setForecast(result.days))
      .catch((e) => {
        alert('Something went wrong')
        console.error(e)
      })
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${trip.city}/today?unitGroup=metric&include=days&key=${process.env.REACT_APP_WEATHER_API}&contentType=json`)
      .then((data) => data.json()).then((result) => setTodayWeather(result))
      .catch((e) => {
        alert('Something went wrong')
        console.error(e)
      })
  }, [trip]);
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