import React, {
	Component
} from 'react';
import Store from '../Store.js';
import * as Actions from '../Actions.js';
import '../index.css';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.onClickInc = this.onClickInc.bind(this);
		this.onClickDec = this.onClickDec.bind(this);
		console.log(Store.getState());
		this.getOwnState = this.getOwnState.bind(this);
		this.onChange = this.onChange.bind(this);
		this.state = this.getOwnState();
	}

	componentDidMount() {
		Store.subscribe(this.onChange);
	}

	getOwnState() {
		return {
			count: Store.getState()[this.props.caption]
		};
	}

	onClickInc() {
		Store.dispatch(Actions.increment(this.props.caption));
	}

	onClickDec() {
		Store.dispatch(Actions.decrement(this.props.caption));
	}

	onChange() {
		this.setState({
			count: Store.getState()[this.props.caption]
		});
	}


	render() {
		const counterName = this.props.caption;
		return (
			<div style={{paddingLeft:'120px'}}>
                <button className="counter-button" onClick={this.onClickInc} >+</button>
                <button className="counter-button" onClick={this.onClickDec} >-</button>
                <span className="counter-display"> {counterName}----Count:{this.state.count}</span>
            </div>
		)
	}

}

export default Counter