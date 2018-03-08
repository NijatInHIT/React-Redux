import React, {
	Component
} from 'react';

class ClickCounter extends Component {
	constructor(props) {
		super(props);
		this.onClickButton = this.onClickButton.bind(this);
		this.state = {
			count: 0
		};

	}

	onClickButton() {
		this.setState({
			count: this.state.count + 1
		});
	}

	render() {
		const clickStyle={
			margin:'50px',
			border:'5px solid blue'
		};

		return (
			<div class="clickButton">
				<button onClick={this.onClickButton}>Click me? How dare you are!</button>
				<div style={clickStyle}>
					Click Count:{this.state.count}
				</div>
			</div>


		);
	}
}

export default ClickCounter;