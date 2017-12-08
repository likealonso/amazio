import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter,
    Link,
    Route,
    Switch
} from 'react-router-dom'
import Catalog from './pages/Catalog/Catalog'
import NavBar from './components/NavBar/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => (
              <div>
                <p><Link to='/catalog'>Catalog</Link></p>
              </div>
            )}
            />
            <Route exact path='/catalog' render={(props) => <Catalog/>}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
