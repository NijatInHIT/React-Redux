import React, {
	Component
} from 'react';
import Store from '../Store.js';
import * as Actions from '../Actions.js';
import Counter from './Counter.js';
import Summary from './Summary.js';
import '../index.css';

class CounterPanel extends Component {
	constructor(props) {
		super(props);
		this.onClickRestart = this.onClickRestart.bind(this);
	}

	onClickRestart() {
		Store.dispatch(Actions.restart());
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