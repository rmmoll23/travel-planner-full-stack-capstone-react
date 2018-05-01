import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function PackingList(props) {
	return (
		
        <main role="main" className="packingList hidden">
            <h1 aria-label="packing list" className="packListHeaders viewHeader"></h1>
            <div>
                    <div className="packListContainer">
                            <h2 className="packListHeaders">Clothing</h2>
                            <div className="listBox">
                                    <input type="text" placeholder="Add Item" name="addItem" className="itemToAdd" required /><button className="button-addItem" type="button">Add Item</button>
                                    <div className="itemList Clothing">
                                            
                                    </div>
                            </div>
                    </div>
                    <div className="packListContainer">
                            <h2 className="packListHeaders">Pets</h2>
                            <div className="listBox">
                                    <input type="text" placeholder="Add Item" name="addItem" className="itemToAdd" required /><button className="button-addItem" type="button">Add Item</button>
                                    <div className="itemList Pets">
                                        
                                    </div>
                            </div>
                    </div>
                    <div className="packListContainer">
                            <h2 className="packListHeaders">Media</h2>
                            <div className="listBox">
                                    <input type="text" placeholder="Add Item" name="addItem" className="itemToAdd" required /><button className="button-addItem" type="button">Add Item</button>
                                    <div className="itemList Media">
                                        
                                    </div>
                            </div>
                    </div>
                    <div className="packListContainer">
                            <h2 className="packListHeaders">Toiletries</h2>
                            <div className="listBox">
                                    <input type="text" placeholder="Add Item" name="addItem" className="itemToAdd" required /><button className="button-addItem" type="button">Add Item</button>
                                    <div className="itemList Toiletries">
                                        
                                    </div>
                            </div>
                    </div>
                    <div className="packListContainer">
                            <h2 className="packListHeaders">Travel</h2>
                            <div className="listBox">
                                    <input type="text" placeholder="Add Item" name="addItem" className="itemToAdd" required /><button className="button-addItem" type="button">Add Item</button>
                                    <div className="itemList Travel">
                                            
                                    </div>
                            </div>
                    </div>
                    <div className="packListContainer">
                            <h2 className="packListHeaders">Miscellaneous</h2>
                            <div className="listBox">
                                    <input type="text" placeholder="Add Item" name="addItem" className="itemToAdd" required /><button className="button-addItem" type="button">Add Item</button>
                                    <div className="itemList Miscellaneous">
                                            
                                    </div>
                            </div>
                    </div>
                                            
            </div>
    </main>
	)
}