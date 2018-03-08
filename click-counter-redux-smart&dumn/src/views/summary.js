import React, {
	Component
} from 'react';
import '../index.css';

function summary(props) {
	const {
		summary
	} = props;

	return (
		<div>
			<hr/>
				<span className="summarySpan">SUMMARY:{summary}</span>
		</div>
	);
}

export default summary