import React from 'react';
import {shallow, mount, render} from 'enzyme';

import NewTrip from './newTrip';

describe('<NewTrip />', () => {
	it('Renders without crashing', () => {
		shallow(<NewTrip />);
	});
});