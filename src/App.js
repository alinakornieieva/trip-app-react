import './App.css';
import { Form } from './components/Form/Form';
import { Search } from './components/Search/Search';

const App = () => {
  return <div>
    <h1>Weather <strong>Forecast</strong></h1>
    <Search />
    <Form />
  </div>
}

export default App;
