import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function LogIn(props) {
	return (
		
        <main role="main" className="logIn hidden">
            <form>
                    <div className="container">
                        <h1>Log in</h1>
                        <p>Please enter your username and password</p>
                        <p className="demo">Demo username: demoUser</p>
                        <p className="demo">Demo password: password</p>
                    
                        <label htmlFor="username">Username</label>
                        <input aria-label="Enter username" id="logIn-username" type="text" placeholder="Enter Username" value="" name="username" required /><br /><br />
                    
                        <label htmlFor="password">Password</label>
                        <input id="logIn-password" type="password" placeholder="Enter Password" name="password" value="" required /><br /><br />
                        <button id="cancelLogIn" className="button-left" type="button">Cancel</button>
                        <button id="enterApp" className="button-right" type="submit">Submit</button>
                    
                        <p>Don't have an account? <a id="toSignUp" href="#">Sign up</a></p>
                    </div>
            </form>
    
        </main>
	)
}