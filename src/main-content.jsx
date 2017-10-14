import React, { Component } from 'react';

import '../sass/main-content.scss';

export default class MainContent extends Component {
    render() {
        return (
            <div className='main-content-container'>
                <div className='main-content-gutter'></div>
                <div className='main-content-body'></div>
                <div className='main-content-gutter'></div>
            </div>
        );
    }
}