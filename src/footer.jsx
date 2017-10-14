import React, { Component } from 'react';

import '../sass/footer.scss';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer-container'>
                <div className='footer-gutter'></div>
                <div className='footer-body'></div>
                <div className='footer-gutter'></div>
            </div>
        );
    }
}
