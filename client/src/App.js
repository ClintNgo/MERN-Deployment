import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NewPirate from './Components/NewPirate.jsx';
import Main from './Views/Main.jsx'
import ShowPirate from './Components/ShowPirate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Main></Main>
          </Route>
          <Route exact path='/pirate/newpirate'>
            <NewPirate></NewPirate>
          </Route>
          <Route exact path='/pirate/:id'>
            <ShowPirate></ShowPirate>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
