import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import Home from '../pages/Home';
import Scope from '../pages/Scope';
import Domain from '../pages/Domain';
import Subdomain from '../pages/Subdomain';

const routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={(Home)} />
    <Route exact path="/scope" component={(Scope)} />
    <Route exact path="/domain" component={(Domain)} />
    <Route exact path="/subdomain" component={(Subdomain)} />
  </BrowserRouter>
)

export default routes;
