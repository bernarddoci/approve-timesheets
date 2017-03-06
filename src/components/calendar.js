import React, { Component } from 'react';
import Month from './month';
import DaysHeader from './days-header';
import Days from './days';

class Calendar extends Component{
	constructor(props){
		super(props);
		this.state = {
			month: new Date().getMonth()
		};
		this.nextMonth = this.nextMonth.bind(this);
		this.prevMonth = this.prevMonth.bind(this);
	}

	nextMonth(){
		this.setState({month: this.state.month <= 10? this.state.month + 1: 11});
	}

	prevMonth(){
		this.setState({month: this.state.month >= 1? this.state.month - 1: 0});
	}

	render(){
		console.log(this.state.month);
		return (
			<div className="calendar">
				<Month 
					nextMonth={this.nextMonth} 
					prevMonth={this.prevMonth} 
					month={this.state.month}/>
				<DaysHeader />
				<Days />
			</div>);
	}
}

export default Calendar;