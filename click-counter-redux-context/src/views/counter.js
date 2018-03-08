import React, {
	Component
} from 'react';
import * as Actions from '../actions.js';
import Store from '../store.js';
import '../index.css';

function Counter(props) {
	const {
		caption,
		onClickInc,
		onClickDec,
		value
	} = props;
	return (

		<div>
			<button className="counter-button" onClick={onClickInc} >+</button>
            <button className="counter-button" onClick={onClickDec} >-</button>
            <span className="counter-display"> {caption}----Count:{value}</span>
		</div>
	)
}

export default Counter