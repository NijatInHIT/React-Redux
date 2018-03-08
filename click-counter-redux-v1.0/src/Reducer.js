import * as ActionTypes from './ActionTypes.js';
import {
	counterInit
} from './Store.js'

export default (state, action) => {
	const {
		counterCaption
	} = action;
	switch (action.type) {
		case ActionTypes.INCREMENT:
			{
				return { ...state,
					[counterCaption]: state[counterCaption] + counterInit[counterCaption]
				};
			}
		case ActionTypes.DECREMENT:
			{
				return { ...state,
					[counterCaption]: state[counterCaption] - counterInit[counterCaption]
				};
			}
		case ActionTypes.RESTART:
			{
				return counterInit;
			}
		default:
			{
				return state;
			}
	}
}