import React,{Component,ReactDOM} from 'react';
import Counter from './clickcounter.jsx';
import "./index.css";



class CounterPanel extends Component {

    constructor(props){
        super(props);
        this.initValue=[0,10,100];
        this.restart=this.restart.bind(this);
        const initSum =this.initValue.reduce((a,b)=>a+b,0);
        this.state={
            sum:initSum,
            isInit:false
        };
        this.onCounterChange=this.onCounterChange.bind(this);
    }

    restart(){
        for(let cnt1 of this.counter){
            cnt1.counterInitialState();
        }
        this.setState({sum:this.initValue.reduce((a,b)=>a+b,0)});
    }

    onCounterChange(newValue,oldValue){
        const changeValue= newValue - oldValue;
        this.setState({sum:this.state.sum+changeValue});
    }


    render(){

        return( 
            <div className="counter-panel" style={{padding:'30px 60px 0 60px',border:'1px solid red'}}>
                <Counter ref={(counter)=>{this.counter=[];this.counter.push(counter);}} initCount={0} counterName="--1st --" onUpdate={this.onCounterChange} />
                <Counter ref={(counter)=>{this.counter.push(counter);}} initCount={10} counterName="--2nd--" onUpdate={this.onCounterChange}  />
                <Counter ref={(counter)=>{this.counter.push(counter);}} initCount={100} counterName="--3rd--" onUpdate={this.onCounterChange} />
                <hr/>
                <span className="total-count"> --- Total count:{this.state.sum} --- </span>
                <button className="restart" onClick={this.restart} >restart</button>
                <hr/>
            </div>
        )
    }
}

export default CounterPanel