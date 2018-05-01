import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Profile from './profile';

describe('<Profile />', () => {
	it('Renders without crashing', () => {
		shallow(<Profile />);
	});
});