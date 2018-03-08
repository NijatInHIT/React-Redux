import React, {
	Component
} from 'react';
import '../index.css';
import Store from '../store.js';
import * as Actions from '../actions.js';
import Counter from './counter.js';


class CounterContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: Store.getState()[this.props.caption]
		}
		this.onChange = this.onChange.bind(this);
		this.onClickInc = this.onClickInc.bind(this);
		this.onClickDec = this.onClickDec.bind(this);
	}

	componentDidMount() {
		Store.subscribe(this.onChange);
	}
	onChange() {
		this.setState({
			count: Store.getState()[this.props.caption]
		});
	}
	onClickDec() {
		Store.dispatch(Actions.decrement(this.props.caption));
	}
	onClickInc() {
		Store.dispatch(Actions.increment(this.props.caption));
	}

	render() {
		return (
			<div>
				<Counter caption={this.props.caption} onClickInc={this.onClickInc} onClickDec={this.onClickDec} value={this.state.count}/>
			</div>


		)
	}
}

export default CounterContainer