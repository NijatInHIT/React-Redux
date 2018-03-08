import React, {
	Component
} from 'react';
import Store from '../store.js';
import Summary from './summary.js';

class SummaryContainer extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.state = {
			summary: Object.values(Store.getState()).reduce((total, num) => {
				return total + num;
			})
		};
	}

	componentDidMount() {
		Store.subscribe(this.onChange);
	}

	onChange() {
		this.setState({
			summary: Object.values(Store.getState()).reduce((total, num) => {
				return total + num;
			})
		});
	}

	render() {
		return (
			<div>
				<Summary summary={this.state.summary}/>
			</div>
		)
	}
}

export default SummaryContainer