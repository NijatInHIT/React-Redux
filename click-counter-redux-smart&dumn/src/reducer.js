import * as ActionTypes from './actionTypes.js';


export const initValue = {
	"First": 1,
	"Second": 10,
	"Third": 100
};

export default function reducer(state, action) {
	const {
		counterCaption
	} = action;

	switch (action.type) {
		case ActionTypes.INCREMENT:
			{
				return { ...state,
					[counterCaption]: state[counterCaption] + initValue[counterCaption]
				};
			}
		case ActionTypes.DECREMENT:
			{
				return { ...state,
					[counterCaption]: state[counterCaption] - initValue[counterCaption]
				};
			}
		case ActionTypes.RESTART:
			{
				return initValue;
			}
		default:
			{
				return state;
			}
	}
}