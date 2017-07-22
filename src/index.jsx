import React from 'react';
import {render} from 'react-dom';

import {BrowserRouter} from 'react-router-dom';
import App from './app.jsx';

export default class Index extends React.Component {
    render() {
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    }
}
