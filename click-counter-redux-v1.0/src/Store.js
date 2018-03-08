import {
	createStore
} from 'redux';
import reducer from './Reducer.js';

export const counterInit = {
	'First': 1,
	'Second': 10,
	'Third': 100
};

const store = createStore(reducer, counterInit);

export default store