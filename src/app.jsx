import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <p>Hello react stuff and things!</p>
            </BrowserRouter>
        );
    }
}
