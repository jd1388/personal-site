import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import Body from './body';

import '../sass/app.scss';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        );
    }
}
