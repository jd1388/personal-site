import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {BrowserRouter} from 'react-router-dom';

import App from '../src/app.jsx';

describe('<App/>', function () {
    let app;

    beforeEach(function() {
        app = shallow(<App/>);
    })

    it('should have a BrowserRouter as its root element', function () {
        expect(app.contains(<BrowserRouter/>));
    });
});
