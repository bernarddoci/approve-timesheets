import React, { Component } from 'react';
import Month from './month';
import DaysHeader from './days-header';
//import Week from './week';
import axios from 'axios';

class Calendar extends Component{
	constructor(props){
		super(props);
		this.state = {
			month_number: new Date().getMonth(),
			weeks: []
		};
		this.nextMonth = this.nextMonth.bind(this);
		this.prevMonth = this.prevMonth.bind(this);
		this.getWeeks = this.getWeeks.bind(this);
	}

	nextMonth(){
		this.setState({month_number: this.state.month_number <= 10? this.state.month_number + 1: 11});
	}

	prevMonth(){
		this.setState({month_number: this.state.month_number >= 1? this.state.month_number - 1: 0});
	}

	getWeeks(){
		// get week_id here...
		let user_id = this.props.user_id;
		let month_number = this.state.month_number + 1; 
		if(user_id){
			axios.get(` https://timesheet-staging-aurity.herokuapp.com/api/training/weeks/${month_number}/2017/${user_id}`)
				.then((weeks)=>{
					this.setState({weeks: weeks.data.data.weeks});
				})
				.catch((error)=>{console.log(error)});	
		}	
	}

	


	render(){
		console.log(this.state.weeks)
		return (
			<div className="calendar">
				<Month 
					nextMonth={this.nextMonth} 
					prevMonth={this.prevMonth} 
					month_number={this.state.month_number}/>
				<DaysHeader />
				
			</div>);
	}
}

export default Calendar;