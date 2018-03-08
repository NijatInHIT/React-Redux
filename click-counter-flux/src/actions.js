import * as ActionType from './actionType.js';
import AppDispatcher from './appDispatcher.js'

export const increment = (counterCaption) => {
	AppDispatcher.dispatch({
		type: ActionType.INCREMENT,
		counterCaption: counterCaption
	});
};

export const decrement = (counterCaption) => {
	AppDispatcher.dispatch({
		type: ActionType.DECREMENT,
		counterCaption: counterCaption
	});
};


export const restart = () => {
	AppDispatcher.dispatch({
		type: ActionType.RESTART
	});
};