import React, {
	Component
} from 'react';
import CounterStore from '../stores/counterStore.js';
import * as Actions from '../actions.js';
import '../index.css';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.onClickIncrement = this.onClickIncrement.bind(this);
		this.onClickDecrement = this.onClickDecrement.bind(this);
		this.onChange = this.onChange.bind(this);
		this.state = {
			count: CounterStore.getCounter()[this.props.caption]
		};
	}

	componentDidMount() {
		CounterStore.addChangeListener(this.onChange);
	}
	componentWillUnmount() {
		CounterStore.removeChangeListener(this.onChange);
	}
	onChange() {
		const newCount = CounterStore.getCounter()[this.props.caption];
		this.setState({
			count: newCount
		});
	}

	onClickIncrement() {
		Actions.increment(this.props.caption);
	}

	onClickDecrement() {
		Actions.decrement(this.props.caption);
	}

	render() {
		const counterName = this.props.caption;
		return (
			<div style={{paddingLeft:'120px'}}>
                <button className="counter-button" onClick={this.onClickIncrement} >+</button>
                <button className="counter-button" onClick={this.onClickDecrement} >-</button>
                <span className="counter-display"> {counterName}----Count:{this.state.count}</span>
            </div>
		)
	}
}

export default Counter