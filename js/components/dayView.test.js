import React from 'react';
import {shallow, mount, render} from 'enzyme';

import DayView from './dayView';

describe('<DayView />', () => {
	it('Renders without crashing', () => {
		shallow(<DayView />);
	});
});