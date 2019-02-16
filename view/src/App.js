import React, { Component } from 'react';
import {
  BrowserRouter,
	Route,
	Switch
} from 'react-router-dom';

// App Components
import Header from './components/Header';

// App Containers
import Home from './containers/Home';
import AddTransation from './containers/AddTransaction';
import Overview from './containers/Overview';
import DetailedView from './containers/DetailedView';
import Login from './containers/Login';
import Register from './containers/Login';
import NotFound from './NotFound';

// Fav Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faCheck, faCamera, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faCheck, faCamera, faTimes);

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
          <Switch>
            <Route exact path="/"  component={Home} />
            <Route path="/add_transaction"  component={AddTransation} />
            <Route path="/overview" component={Overview} />
            <Route path="/detailed" component={DetailedView} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;