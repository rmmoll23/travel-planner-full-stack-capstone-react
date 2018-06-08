import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Footer(props) {
	return (
		
        <footer role="contentinfo">
            <ul>
                <li><p id="copyright">© 2018 Ryan Moll</p></li>
                <li><a href="mailto:rmmoll23@gmail.com?Subject=Hello" title="Send me an email">Email</a></li>
                <li><a href="https://linkedin.com/in/rmmoll/" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/rmmoll23" title="Check out my code on GitHub" target="_blank">GitHub</a></li>
            </ul>      
        </footer>
	)
}