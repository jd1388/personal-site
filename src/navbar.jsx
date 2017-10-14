import React, { Component } from 'react';

import '../sass/navbar.scss';

export default class Navbar extends Component {
    render() {
        return (
            <div className='navbar-container'>
                <a href='/' className='navbar-home'>Jared Griffin</a>
            </div>
        );
    }
}
