import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Navbar from './navbar';
import MainContent from './main-content';
import Footer from './footer';

import '../sass/home.scss';

export default class Home extends React.Component {
    render() {
        return (
            <div className='home-container'>
                <Navbar/>
                <MainContent/>
                <Footer/>
            </div>
        );
    }
}
