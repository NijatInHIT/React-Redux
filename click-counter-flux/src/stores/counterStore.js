import AppDispatcher from '../appDispatcher.js';
import * as ActionTypes from '../actionType.js';
import {
	EventEmitter
} from 'events';

const CHANGE_EVENT = 'changed';

const counterInit = {
	'First': 1,
	'Second': 10,
	'Third': 100
};


const counterValues = {
	'First': 1,
	'Second': 10,
	'Third': 100
};


const CounterStore = Object.assign({}, EventEmitter.prototype, {
	getCounter: function() {
		return counterValues;
	},
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback); //此处的this是指向CounterStore对象的
	},
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

CounterStore.dispatchToken = AppDispatcher.register((action) => {
	if (action.type === ActionTypes.INCREMENT) {
		counterValues[action.counterCaption] += counterInit[action.counterCaption];
		CounterStore.emitChange();
	} else if (action.type === ActionTypes.DECREMENT) {
		counterValues[action.counterCaption] -= counterInit[action.counterCaption];;
		CounterStore.emitChange();
	} else if (action.type === ActionTypes.RESTART) {
		for (let key in counterValues) {
			if (counterValues.hasOwnProperty(key)) {
				counterValues[key] = counterInit[key];
			}
		}
		CounterStore.emitChange();
	}
});

export default CounterStore