import React from 'react';

import '../App.css';

const SelectUser = (props) =>{
	return (
		<div className="select-user">
			<select onChange={props.getUserId}>
				<option defaultValue={0}>Select User</option>
					{props.users.map((user)=>{
						return <option key={user.id} value={user.id}>{user.username}</option>
					})}
			</select>
		</div>);
}

export default SelectUser;