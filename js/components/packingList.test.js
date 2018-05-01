import React from 'react';
import {shallow, mount, render} from 'enzyme';

import PackingList from './packingList';

describe('<PackingList />', () => {
	it('Renders without crashing', () => {
		shallow(<PackingList />);
	});
});