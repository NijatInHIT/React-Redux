import {
	createStore
} from 'redux';
import Reducer, {
	initValue
} from './reducer.js';


const store = createStore(Reducer, initValue);
export default store