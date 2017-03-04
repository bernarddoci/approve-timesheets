import React from 'react';
import '../App.css';

const SelectUser = (props)=>{
	return (
		<div className="styled-select slate rounded">
			<select value={props.value} onChange={props.onHandleChange}>
				<option defaultValue="Select User">Select User</option>
					{props.users.map((user)=>{
						return <option key={user.id} value={user.id}>{user.username}</option>
					})}
  			</select>
		</div>);
}

export default SelectUser;