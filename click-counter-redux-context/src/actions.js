import * as ActionTypes from './actionTypes.js';

export

function increment(counterCaption) {
	return ({
		type: ActionTypes.INCREMENT,
		counterCaption: counterCaption
	});
}

export

function decrement(counterCaption) {
	return ({
		type: ActionTypes.DECREMENT,
		counterCaption: counterCaption
	});
}

export

function restart() {
	return ({
		type: ActionTypes.RESTART
	});
}