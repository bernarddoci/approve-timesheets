import React, { Component } from 'react';

class Day extends Component{
	handleDay(){
		this.props.getDay(this.props.day);
	}

	render(){
		// console.log(props);
		return (<td onClick={this.handleDay.bind(this)}>{this.props.day}<span className="day-hour">{this.props.hour}h:{this.props.min}m</span></td>)		
	}
}

export default Day;