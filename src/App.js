import React, { Component } from 'react';
import SelectUser from './components/select-user';
import Calendar from './components/calendar';
import AddTime from './components/add-time';
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
            hour: 0,
			min: 0,
            week_id: 0
        }
        this.getUsers = this.getUsers.bind(this);
        this.getUserId = this.getUserId.bind(this);
        this.getWeeks = this.getWeeks.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.prevMonth = this.prevMonth.bind(this);
        this.handleHour = this.handleHour.bind(this);
		this.handleMin = this.handleMin.bind(this);
		this.handleNotes = this.handleNotes.bind(this);
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

	handleNotes(e){
		this.setState({
			notes: e.target.value
		})
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
    	//console.log("Users:"+this.state.users+"\nUser_Id:"+this.state.user_id+"\nMonth_number:"+this.state.month_number+"\nWeeks:"+this.state.weeks);
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
        		weeks={this.state.weeks}/>
        	<textarea
				id="notes" 
				name="notes"
			 	cols="40" 
			 	rows="3"
			 	onChange={this.handleNotes}
			 	placeholder="Notes"></textarea>
        	<AddTime 
        		onAddHour={this.handleHour} 
        		onAddMin={this.handleMin}/>
        	<div className="addReject">
        		<button>Approve</button>
        		<button>Reject</button>
        	</div>
        </div>);
        }
    }

export default App;
