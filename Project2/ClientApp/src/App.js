import React from 'react';
import { Home } from './components/Home';
import { Customer } from './components/Customer';
import { Product } from './components/Product';
import { Store } from './components/Store';
import { Navigation} from './components/Navigation';
import { BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import './custom.css'



function App() {
  return (
    <BrowserRouter>
    <div className='container'>
      <h3 className='m-3 d-flex justify-content-center'>
        React Js 
      </h3>

      <Navigation/>

      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/customer' component={Customer}/>
        <Route path='/product' component={Product}/>
        <Route path='/store' component={Store}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;