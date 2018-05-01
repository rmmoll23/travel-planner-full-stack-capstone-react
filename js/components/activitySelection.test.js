import React from 'react';
import {shallow, mount, render} from 'enzyme';

import ActivitySelection from './activitySelection';

describe('<ActivitySelection />', () => {
	it('Renders without crashing', () => {
		shallow(<ActivitySelection />);
	});
});