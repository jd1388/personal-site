import React, { Component } from 'react';

import '../sass/main-content.scss';

export default class MainContent extends Component {
    render() {
        return (
            <div className='main-content-container'>
                <div className='main-content-gutter'></div>
                <div className='main-content-body'>
                    <div className='main-content-hero-spacer'></div>
                    <div className='main-content-hero'>Hi there!</div>
                    <div className='main-content-hero-spacer'></div>    
                </div>
                <div className='main-content-gutter'></div>
            </div>
        );
    }
}