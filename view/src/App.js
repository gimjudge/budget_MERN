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
//// Single Transactions
/*
import AddTransation from './containers/AddTransaction';
import EditTransation from './containers/EditTransaction';
*/
import Transation from './containers/Transaction';
import ViewTransation from './containers/ViewTransaction';
//// Category Summary per Month
import Overview from './containers/Overview';
//// Authentication
import Login from './containers/Login';
import Register from './containers/Login';
//// Errors
import NotFound from './NotFound';

// Fav Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faCheck, faCamera, faTimes, faTrash, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faCheck, faCamera, faTimes, faTrash, faEdit, faPlus);

/*
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
            
            <Route path="/add_transaction"  component={AddTransation} />
            <Route path="/view_transaction" component={ViewTransation} />
            <Route path="/edit_transaction" component={EditTransation} />
            <Route path="/transaction/:action/:id?"  component={Transation} />
*/
class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="container">
          <Header></Header>
          <Switch>
            <Route exact path="/"  component={Home} />
            <Route path="/transaction/view/:id"  component={ViewTransation} />
            <Route path="/transaction/:action/:id?"  component={Transation} />
            <Route path="/overview" component={Overview} />
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