import React from 'react';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;
import {Provider} from 'react-redux';


import Nav from '../js/components/nav';
import ActivitySelection from '../js/components/activitySelection';
import DayView from '../js/components/dayView';
import Footer from '../js/components/footer';
import Landing from '../js/components/landing';
import LogIn from '../js/components/logIn';
import PackingList from '../js/components/packingList';
import Profile from '../js/components/profile';
import SignUp from '../js/components/signUp';
import TripPlanner from '../js/components/tripPlanner';



document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<Nav />,
        document.getElementById('reactNav'));} );

document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<ActivitySelection />,
        document.getElementById('reactActivitySelection'));} );
        
document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<DayView />,
        document.getElementById('reactDayView'));} );
        
document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<Footer />,
        document.getElementById('reactFooter'));} );
        
document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<Landing />,
        document.getElementById('reactLanding'));} );
        
document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<LogIn />,
	document.getElementById('reactLogIn'));} );
        
document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<PackingList />,
        document.getElementById('reactPackingList'));} );
        
document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<SignUp />,
        document.getElementById('reactSignUp'));} );
        
document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<Profile />,
        document.getElementById('reactProfile'));} );
        
document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<TripPlanner />,
		document.getElementById('reactTripPlanner'));} );
