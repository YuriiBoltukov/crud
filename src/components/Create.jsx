import React from 'react';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Create(props) {
	const { email, setEmail, username, setUserName, phone, setPhone } = props;
	const postData = e => {
		e.preventDefault();
		axios.post(`https://fakestoreapi.com/users`, {
			username,
			email,
			phone,
		});
	};
	function userHandler(e) {
		e.preventDefault();
		setUserName(e.target.value);
	}
	function emailHandler(e) {
		e.preventDefault();
		setEmail(e.target.value);
	}
	function phoneHandler(e) {
		e.preventDefault();
		setPhone(e.target.value);
	}
	return (
		<div>
			<Form className='create-form'>
				<Form.Field>
					<label className='label'>User Name</label>

					<input
						className='input input-username'
						placeholder='User Name'
						onChange={e => userHandler(e)}
					/>
				</Form.Field>
				<Form.Field>
					<label className='label input-email'>Email</label>
					<input
						className='input'
						placeholder='email'
						onChange={e => emailHandler(e)}
					/>
				</Form.Field>
				<Form.Field>
					<label className='label'>Phone Number</label>
					<input
						className='input'
						placeholder='Phone number'
						onChange={e => phoneHandler(e)}
					/>
				</Form.Field>
				<Link to={'/read'}>
					<Button className='form-btn' onClick={e => postData(e)} type='submit'>
						Submit
					</Button>
				</Link>
			</Form>
		</div>
	);
}
