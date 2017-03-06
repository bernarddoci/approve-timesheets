import React from 'react';

const Week = (props) =>{
	return (
		<div>
			{props.weeks.map((week)=>{
				console.log(week);
			})}
		</div>);
}

export default Week;