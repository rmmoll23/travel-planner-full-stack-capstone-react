import React from 'react';
import {shallow, mount, render} from 'enzyme';

import SignUp from './signUp';

describe('<SignUp />', () => {
	it('Renders without crashing', () => {
		shallow(<SignUp />);
	});
});