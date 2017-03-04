import React, { Component } from 'react';
import Month from './month';
import DaysHeader from './days-header';
import Days from './days';

class Calendar extends Component{
	constructor(props){
		super(props);
		this.state = {
			month: '',
		};
	}

	render(){
		return (
			<div className="calendar">
				<Month />
				<DaysHeader />
				<Days />
			</div>);
	}
}

export default Calendar;