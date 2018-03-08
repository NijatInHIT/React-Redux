import AppDispatcher from '../appDispatcher.js';
import * as ActionTypes from '../actionType.js';
import CounterStore from './counterStore.js';
import {
	EventEmitter
} from 'events';

const CHANGE_EVENT = 'changed';

function computeSummary(counterValues) {
	let summary = 0;
	for (const key in counterValues) {
		if (counterValues.hasOwnProperty(key)) {
			summary += counterValues[key];
		}
	}
	return summary;
}

const SummaryStore = Object.assign({}, EventEmitter.prototype, {
	getSummary: function() {
		return computeSummary(CounterStore.getCounter());
	},
	emitChange: function() { //执行变化，这里的EventEmitter是nodejs里的类，eventEmitter.emit是执行某一类事件，这里是'changed'
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

SummaryStore.dispatchToken = AppDispatcher.register((action) => {
	if (action.type === ActionTypes.INCREMENT || action.type === ActionTypes.DECREMENT || action.type === ActionTypes.RESTART) {
		AppDispatcher.waitFor([CounterStore.dispatchToken]);
		SummaryStore.emitChange();
	}
});

export default SummaryStore