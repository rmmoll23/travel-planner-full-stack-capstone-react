import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Nav from './nav';

describe('<Nav />', () => {
	it('Renders without crashing', () => {
		shallow(<Nav />);
	});
});