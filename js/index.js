import React from 'react';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;
import {Provider} from 'react-redux';

// import '../assets/css/main.css';

import Nav from '../js/components/nav';


document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<Nav />,
		document.getElementById('reactNav'));} );
