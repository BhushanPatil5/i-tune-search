// routes.js
import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import SearchGrid from './components/search-grid';
import HomeLayout from './components/HomeLayout';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomeLayout} />
            <Route exact path="/search-grid" component={SearchGrid} />
        </Switch>
    </BrowserRouter>
)

export default Routes