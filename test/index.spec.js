import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import App from '../src/index.jsx';

describe('<App/>', function () {
    it('should have the test tag', function () {
        const app = shallow(<App/>);
        expect(app.type()).to.equal('p');
    });
});
