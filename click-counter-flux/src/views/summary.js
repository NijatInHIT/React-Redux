import React, {
	Component
} from 'react';
import SummaryStore from '../stores/summaryStore.js';
import '../index.css';

class Summary extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.state = {
			summary: SummaryStore.getSummary()
		};
	}

	componentDidMount() {
		SummaryStore.addChangeListener(this.onChange);
	}

	onChange() {
		this.setState({
			summary: SummaryStore.getSummary()
		});
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