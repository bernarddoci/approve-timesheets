import React from 'react';
import Day from './day';

const MonthWeeks = (props) =>{
	return (
		<tr>
			{props.days.map((day)=>{
				return <Day key={day.day_number} day={day.day_number}/>;
			})}
		</tr>);
	}


export default MonthWeeks;