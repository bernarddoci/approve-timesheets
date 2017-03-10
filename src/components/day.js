import React from 'react';

const Day = (props) =>{
	// console.log(props);
	return (<td>{props.day}<span className="day-hour">{props.hour}h:{props.min}m</span></td>)
}

export default Day;