import React,{Component} from 'react';
import "./index.css";


class Counter extends Component{
    constructor(props){
        super(props);
        this.onClickInc=this.onClickInc.bind(this);
        this.onClickDec=this.onClickDec.bind(this);
        this.state={
            count:this.props.initCount||0
        };
        console.log('counter constructor');
    }

    onClickInc(){
        this.props.onUpdate(this.state.count+(this.props.initCount||1),this.state.count);
        this.setState({count:this.state.count+(this.props.initCount||1)});
        
        
    }

    onClickDec(){
        this.props.onUpdate(this.state.count-(this.props.initCount||1),this.state.count);
        this.setState({count:this.state.count-(this.props.initCount||1)});
        
    }

    componentWillMount(){
        console.log('counter WillMount');
    }

    componentWillReceiveProps(nextProps){
        console.log('counter componentwillreceiveprops'+this.props.counterName+'---');
        console.log(nextProps);
    }

    counterInitialState(){
        this.setState({count:this.props.initCount});
        console.log(this);
    }

    render(){
        const counterName=this.props.counterName;
        return (
            <div style={{paddingLeft:'120px'}}>
                <button className="counter-button" onClick={this.onClickInc} >+</button>
                <button className="counter-button" onClick={this.onClickDec} >-</button>
                <span className="counter-display"> {counterName}----Count:{this.state.count}</span>
            </div>
        )
    }

    componentDidMount(){
        console.log('counter DidMount');
    }
}



export default Counter