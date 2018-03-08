import React, {
	Component
} from 'react';
import CounterContainer from './counterContainer.js';
import SummaryContainer from './summaryContainer.js';
import '../index.css';
import * as Actions from '../actions.js';
import Store from '../store.js';


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
				<CounterContainer caption="First" />
				<CounterContainer caption="Second" />
				<CounterContainer caption="Third" />
				<hr/>
				<hr/>
				<SummaryContainer />
				<hr/>
				<hr/>
				<hr/>
				<button className="restart" onClick={this.onClickRestart}>restart</button>
			</div>
		)
	}
}


export default CounterPanel