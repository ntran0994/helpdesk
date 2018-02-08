import * as React from 'react';
import { Route } from 'react-router-dom';
import Home from '../layouts/pages/home/Home';
import Login from '../layouts/pages/login/Login';

export const routes = (
    <div>
        <Route exact={true} path="/" component={Home} />
        <Route path="/login" component={Login} />
    </div>
);