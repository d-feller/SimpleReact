import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar.js';

import keys from '../config/keys';

const API_KEY= keys.apiKey;
const App = () => {
	return (
		<div>
			<SearchBar/>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('.container'));
