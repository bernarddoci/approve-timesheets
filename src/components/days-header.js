import React from 'react';
import '../App.css';

const DaysHeader = () => {
	let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	return (
		<ul className="weekdays">
			{days.map((day) => {
				return <li key={day}>{day}</li>
			})}
		</ul>
		);
};

export default DaysHeader;