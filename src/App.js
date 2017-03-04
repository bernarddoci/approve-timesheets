import React, { Component } from 'react';
import axios from 'axios';
import SelectUser from './components/select-user';
import Calendar from './components/calendar';
import AddTime from './components/add-time';
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			users: [],
			id: '',
			hour: 0,
			min: 0,
			notes: ''
		};
		this.getUsers = this.getUsers.bind(this);
		this.getUserId = this.getUserId.bind(this);
		this.handleNotes = this.handleNotes.bind(this);
		this.handleHour = this.handleHour.bind(this);
		this.handleMin = this.handleMin.bind(this);
	}

	getUsers(){
		axios.get('https://timesheet-staging-aurity.herokuapp.com/api/users')
			.then((user)=>{
				this.setState({users: user.data});
			})
			.catch((error)=>{console.log(error)});
	}

	getUserId(e){
		this.setState({
			id: e.target.value
		})
	}

	handleNotes(e){
		this.setState({
			notes: e.target.value
		})
	}

	handleHour(e){
		this.setState({
			hour: e.target.value
		});
	}

	handleMin(e){
		this.setState({
			min: e.target.value
		});
	}
	componentDidMount(){
		this.getUsers();
	}

	render() {
		return (
			<div className="app">
				<h1>Timesheets</h1>
				<p>Select User:</p>
				<SelectUser 
				value={this.state.value} 
				onHandleChange={this.getUserId}
				users={this.state.users}/>
				<Calendar />
				<textarea
				id="notes" 
				name="notes"
			 	cols="40" 
			 	rows="3"
			 	onChange={this.handleNotes}
			 	placeholder="Notes"></textarea>
				<AddTime onAddHour={this.handleHour} onAddMin={this.handleMin}/>
				<form className="submit">
					<button type="submit">Approve</button>
					<button type="submit">Reject</button>
					<button type="submit">Save</button>
				</form>
			</div>);
	}
}

export default App;
