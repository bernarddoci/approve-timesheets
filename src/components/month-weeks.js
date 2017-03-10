import React, { Component } from 'react';
import Day from './day';

class MonthWeeks extends Component{
	render(){
		return (
			<tr>
				{this.props.days.map((day)=>{
					// console.log(day);
					return <Day key={day.day_number} min={day.minutes} hour={day.hours} day={day.day_number}/>;
				})}
			</tr>);
	}
}

export default MonthWeeks;