import React, {
	Component
} from 'react';
import Store from '../Store.js';
import * as Actions from '../Actions.js';
import '../index.css';

class Summary extends Component {
	constructor(props) {
		super(props);
		this.getOwnState = this.getOwnState.bind(this);
		this.onChange = this.onChange.bind(this);
		this.state = this.getOwnState();
	}
	getOwnState() {
		let allState = Store.getState();
		let summary = 0;
		for (let key in allState) {
			if (allState.hasOwnProperty(key)) {
				summary += allState[key];
			}
		}
		return {
			summary: summary
		};
	}

	componentDidMount() {
		Store.subscribe(this.onChange);
	}

	onChange() {
		this.setState(this.getOwnState());
	}

	render() {
		return (
			<div>
				<hr/>
				<span className="summarySpan">SUMMARY:{this.state.summary}</span>
			</div>

		)
	}
}

export default Summary