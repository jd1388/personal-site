import React from 'react';
import {render} from 'react-dom';
import {Switch, Route} from 'react-router-dom';

import Home from './home';
import Test from './test';

export default class Body extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/routetest' component={Test}/>
                </Switch>
            </main>
        )
    }
};
