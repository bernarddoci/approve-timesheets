import React, { Component } from 'react';
import '../App.css';

class AddTime extends Component{
	
	render(){
		return (
			<div className="addTime">
				<form>
					<input defaultValue={0} onChange={this.props.onAddHour} type="number" min="0" max="24"/>h
					<input defaultValue={0} onChange={this.props.onAddMin} type="number" min="0" max="60"/>min
				</form>
			</div>);
	}
}

export default AddTime;