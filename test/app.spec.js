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
        expect(app.find('BrowserRouter')).to.have.length(1);
    });

    describe('<BrowserRouter/>', function () {
        let router;

        beforeEach(function () {
            router = app.find('BrowserRouter')[0];
        });

        it('should contain the body component', function () {
            console.log(router);

            expect(router.find('Body')).to.have.length(1);
        });
    })
});
