import React, {
	Component
} from 'react';
import Counter from './counter.js';
import Summary from './summary.js';
import * as Action from '../actions.js';
import '../index.css';

class CounterPanel extends Component {
	constructor(props) {
		super(props);
		console.log('counterPanel-constructor');
	}

	componentDidMount() {

	}

	onClickRestart() {
		Action.restart();
	}

	render() {
		return (
			<div className="counter-panel" style={{padding:'30px 60px 0 60px',border:'1px solid red'}}>
				<Counter caption="First" />
				<Counter caption="Second" />
				<Counter caption="Third" />
				<hr/>
				<hr/>
				<Summary />
				<hr/>
				<hr/>
				<hr/>
				<button className="restart" onClick={this.onClickRestart}>restart</button>
			</div>
		)
	}
}

export default CounterPanel