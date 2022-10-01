import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Customer from './Pages/Customer/Customer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route only path={'/'}>
        <Home></Home>
      </Route>

      <Route>
        <Customer></Customer>
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
