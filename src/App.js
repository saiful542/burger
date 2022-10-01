import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Customer from './Pages/Customer/Customer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route only path={'/'}>
            <Home></Home>
          </Route>

          {/* <Route path={'/Customer'}>
            <Customer></Customer>
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
