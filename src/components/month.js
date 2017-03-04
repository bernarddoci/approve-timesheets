import React, { Component } from 'react';
import '../App.css'

class Month extends Component{
	constructor(props){
		super(props);
		this.state = {
			months: [],
			month: ''
		}
		this.prevMonth = this.prevMonth.bind(this);
		this.nextMonth = this.nextMonth.bind(this);
	}

	prevMonth(){
		this.setState({month: this.state.month >= 1? this.state.month - 1: 0});
	}

	nextMonth(){
		this.setState({month: this.state.month <= 10? this.state.month + 1: 11});
	}

	componentDidMount(){
		this.setState({
			months: [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ],
    		month: new Date().getMonth()
		});
	}

	render(){
		return (
			<div className="month">
				<button onClick={this.prevMonth}>Prev</button>
				<h3>{this.state.months[this.state.month]}</h3>
				<button onClick={this.nextMonth}>Next</button>
			</div>);
	}
}

export default Month;