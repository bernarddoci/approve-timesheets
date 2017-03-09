import React, { Component } from 'react';
import DaysHeader from './days-header';
import MonthWeeks from './month-weeks';

import '../App.css';
class Calendar extends Component{
	constructor(props){
		super(props);
		this.state = {
			months: [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ],
			days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
		}
		this.sortWeeks = this.sortWeeks.bind(this);
	}

	sortWeeks(a, b){
		//Sort weeks to start from week 1 and up
 		if(a.week_id !== undefined){
 			if (a.week_id < b.week_id)
	    		return -1;
	  		if (a.week_id > b.week_id)
	    		return 1;
	  		return 0;
 		}
	}

	render(){
		this.sortWeeks(this.props.weeks);
		this.props.weeks.sort(this.sortWeeks);
		return (
		<div className="calendar">
			<div className="month-header">
				<button onClick={this.props.prevMonth}>Prev</button>
				<h2>{this.state.months[this.props.month_number]}</h2>
				<button onClick={this.props.nextMonth}>Next</button>
			</div>
			<div className="days-header">
				<table>
					<tbody>
						<tr>
							{this.state.days.map((day)=>{
								return <DaysHeader key={day} day={day}/> 
							})}
						</tr>
					</tbody>
				</table>
			</div>
			<div className="month">
				<table>
					<tbody>
						{
							this.props.weeks.map((week)=>{
								console.log(week);
								return <MonthWeeks key={week.week_id} days={week.days_in_week}/>
							})
						}	
					</tbody>
				</table>
			</div>
		</div>);
	}
}

export default Calendar;