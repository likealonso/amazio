import React, { Component } from 'react';
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
  constructor() {
    super();
    this.state = {
      products: null,

    }
  }

  componentDidMount(){
    fetch('/catalog').then( data => data.json()).then((data) => {
      this.setState({products: data})
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => (
              <div>
                <p><Link to='/catalog'>Catalog</Link></p>
              </div>
            )}
            />
            <Route exact path='/catalog' render={(props) => <Catalog products={this.state.products}/>}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
