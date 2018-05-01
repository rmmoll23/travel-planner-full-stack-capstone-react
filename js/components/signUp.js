import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function SignUp(props) {
	return (
		
        <main role="main" className="signUp hidden">
            <form id="signUpForm">
                    <div id="signUpContainer" className="container">
                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account</p>

                        <label htmlFor="name">First Name</label>
                        <input aria-label="Enter first name" type="text" id="signUp-firstName" name="name" required /><br /><br />

                        <label htmlFor="username">Username</label>
                        <input aria-label="Enter username" type="text" id="signUp-username" name="username" required /><br /><br />
                    
                        <label htmlFor="password">Password</label>
                        <input aria-label="Enter password" type="password" id="signUp-password" name="password" required /><br /><br />
                    
                        <label htmlFor="password-confirm">Confirm Password</label>
                        <input aria-label="Confirm password" type="password" id="signUp-passwordB" name="password-confirm" required /><br /><br />
                        <button id="cancel" className="button-left" type="button">Cancel</button>
                        <button id="createAccount" className="button-right" type="submit">Submit</button>
                        

                        <p>Already have an account? <a id="toLogIn" href="#">Log in</a></p>
                    </div>
            </form>
    
        </main>
	)
}