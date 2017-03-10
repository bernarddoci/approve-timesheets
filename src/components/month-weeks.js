import React, { Component } from 'react';
import Day from './day';

class MonthWeeks extends Component{
	constructor(props){
		super(props);
		this.state = {
			day: 0
		}
		this.getDay = this.getDay.bind(this);
	}

	getDay(day){
		this.setState({
			day: day
		});
	}

	updateTime(days){
		days.forEach((day)=>{
			if(day.day_number === this.state.day){
				day.hours = this.props.hour;
				day.minutes = this.props.min;
			}
		})
	}

	shouldComponentUpdate(nextProps, nextState){
		if(this.state.day !== nextState.day){
			this.updateTime(this.props.days);
			return true;
		}
		return false;
	}

	render(){
		// console.log(this.state.day);
		return (
			<tr onClick={()=>{console.log(this)}}>
				{this.props.days.map((day)=>{
					// console.log(day);
					// {minutes: 0, id: 85, hours: 0, day_number: 6}
					return <Day getDay={this.getDay} key={day.day_number} min={day.minutes} hour={day.hours} day={day.day_number}/>;
				})}
			</tr>);
	}
}

export default MonthWeeks;