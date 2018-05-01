import React from 'react';
import {shallow, mount, render} from 'enzyme';

import LogIn from './logIn';

describe('<LogIn />', () => {
	it('Renders without crashing', () => {
		shallow(<LogIn />);
	});
});