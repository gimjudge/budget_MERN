import React, { Component } from 'react';
import {
  BrowserRouter,
	Route,
	Switch
} from 'react-router-dom';

import './css/normalize.css';
import './css/styles.css';

// App Components
import Header from './components/Header';

// App Containers
import Home from './containers/Home';
import AddTransation from './containers/AddTransaction';
import Overview from './containers/Overview';
import DetailedView from './containers/DetailedView';
import Login from './containers/Login';
//import NotFound from './NotFound';

/*
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
*/
class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="container">
          <Header></Header>
          <div className="main-content">
            <Switch>
              <Route exact path="/"  component={Home} />
              <Route path="/add_transaction"  component={AddTransation} />
              <Route path="/overview" component={Overview} />
              <Route path="/detailed" component={DetailedView} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;