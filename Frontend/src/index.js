import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Form from './Pages/Form';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/form/album" component={Form} exact />
        <Route path="/form/faixa" component={Form} exact />
        <Route path="/form/album/:id" component={Form} exact />
        <Route path="/form/faixa/:id" component={Form} exact />
      </Switch>

    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root'),
);
