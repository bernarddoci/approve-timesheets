import React, { Component } from 'react';
import SelectUser from './components/select-user';
import Calendar from './components/calendar';
import axios from 'axios';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            user_id: 0,
            month_number: new Date().getMonth(),
            weeks: [],
            week_id: 0
        }
        this.getUsers = this.getUsers.bind(this);
        this.getUserId = this.getUserId.bind(this);
        this.getWeeks = this.getWeeks.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.prevMonth = this.prevMonth.bind(this);
		this.getWeekId = this.getWeekId.bind(this);
		this.approve = this.approve.bind(this);
		this.reject = this.reject.bind(this);
    }

    getUsers() {
        axios.get('https://timesheet-staging-aurity.herokuapp.com/api/users')
            .then((users) => {
                this.setState({ users: users.data })
            });
    }

	getWeeks(){
		axios.get(`https://timesheet-staging-aurity.herokuapp.com/
		api/training/weeks/${this.state.month_number + 1}/2017/${this.state.user_id}`)
			.then((weeks) => {
				this.setState({weeks: weeks.data.data.weeks})
			})
	}

    getUserId(e){
		this.setState({
			user_id: e.target.value
		})
	}

	nextMonth(){
		this.setState({month_number: this.state.month_number <= 10? this.state.month_number + 1: 11});
	}

	prevMonth(){
		this.setState({month_number: this.state.month_number >= 1? this.state.month_number - 1: 0});
	}

	getWeekId(id){
		this.setState({
			week_id: id
		})
	}

	approve(){
		axios.post(`https://timesheet-staging-aurity.herokuapp.com/api/training/weeks/${this.state.week_id}/${this.state.user_id}/1`, {
		    status: 'approved'
	  	})
  		.then(function (response) {
	  		console.log(response);
  		})
  		.catch(function (error) {
	  		console.log(error);
  		});
	}

	reject(){
		axios.post(`https://timesheet-staging-aurity.herokuapp.com/api/training/weeks/${this.state.week_id}/${this.state.user_id}/1`, {
		    status: 'rejected'
	  	})
  		.then(function (response) {
	  		console.log(response);
  		})
  		.catch(function (error) {
	  		console.log(error);
  		});
	}	


    componentDidMount() {
		this.getUsers();
	}

	componentDidUpdate(prevProps, prevState){
		if(prevState.user_id !== this.state.user_id || prevState.month_number !== this.state.month_number){
			this.getWeeks();
		}
	}

    render() {
        return (
        <div className="app">
        	<h1>Timesheets App</h1>
        	<SelectUser 
        		getUserId={this.getUserId}
        		users={this.state.users}/>
        	<Calendar 
        		month_number={this.state.month_number}
        		nextMonth={this.nextMonth}
        		prevMonth={this.prevMonth}
        		weeks={this.state.weeks}
        		getWeekId={this.getWeekId}/>
        	<div className="addReject">
        		<button onClick={this.approve}>Approve</button>
        		<button onClick={this.reject}>Reject</button>
        	</div>
        </div>);
        }
    }

export default App;
