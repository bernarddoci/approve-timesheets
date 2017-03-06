import React, { Component } from 'react';
import '../App.css'

class Month extends Component{
	constructor(props){
		super(props);
		this.state = {
			months: ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]
		}
	}

	render(){
		return (
			<div className="month">
				<button onClick={this.props.prevMonth}>Prev</button>
				<h3>{this.state.months[this.props.month_number]}</h3>
				<button onClick={this.props.nextMonth}>Next</button>
			</div>);
	}
}

export default Month;