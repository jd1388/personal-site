import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import Index from '../src/index.jsx';
import {BrowserRouter} from 'react-router-dom';

describe('<Index/>', function () {
    let index;

    beforeEach(function() {
        index = shallow(<Index/>);
    })

    it('should be a BrowserRouter component', function () {
        expect(index.equal()).to.equal(<BrowserRouter/>);
    });
});
