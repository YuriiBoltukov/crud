import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { crud } from '../services/crud.service';

export default function Create(props) {
	const [formData, setFormData] = useState({ user: {} });

	function changeUserName(e) {
		e.preventDefault();
		const user = {
			...formData.user,
			username: e.target.value,
		};
		setFormData({ user });
	}

	function changeUserEmail(e) {
		e.preventDefault();
		const user = {
			...formData.user,
			email: e.target.value,
		};
		setFormData({ user });
	}

	function changeUserPhone(e) {
		e.preventDefault();
		const user = {
			...formData.user,
			phone: e.target.value,
		};
		setFormData({ user });
	}
	return (
		<div>
			<Form className='create-form'>
				<Form.Field>
					<label className='label'>User Name</label>

					<input
						className='input input-username'
						placeholder='User Name'
						onChange={e => changeUserName(e)}
					/>
				</Form.Field>
				<Form.Field>
					<label className='label input-email'>Email</label>
					<input
						className='input'
						placeholder='email'
						onChange={e => changeUserEmail(e)}
					/>
				</Form.Field>
				<Form.Field>
					<label className='label'>Phone Number</label>
					<input
						className='input'
						placeholder='Phone number'
						onChange={e => changeUserPhone(e)}
					/>
				</Form.Field>
				<Link to={'/read'}>
					<Button
						className='form-btn'
						type='submit'
						onClick={() => {
							crud.createUser(formData.user);
						}}>
						Create
					</Button>
				</Link>
			</Form>
		</div>
	);
}
