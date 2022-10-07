import React, { useEffect, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { crud } from '../services/crud.service';
import { useLocation, Link } from 'react-router-dom';

export default function Update(props) {
	const [formData, setFormData] = useState({ user: {} });
	const location = useLocation();
	const { userId } = location.state;

	async function getUserData(userId) {
		const data = await crud.getUserById(userId);
		setFormData({ user: data });
	}
	console.log(formData.user);
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

	function updateUser(user) {
		crud.updateUser(user);
	}

	useEffect(() => {
		getUserData(userId);
	}, [userId]);

	return (
		<div>
			<Form className='create-form' onSubmit={() => updateUser(formData.user)}>
				<Form.Field>
					<label className='label'>User Name</label>
					<input
						type='text'
						className='input input-username'
						placeholder='User Name'
						value={formData.user.username}
						onChange={e => changeUserName(e)}
					/>
				</Form.Field>
				<Form.Field>
					<label className='label input-email'>Email</label>
					<input
						type='email'
						className='input'
						placeholder='Email'
						value={formData.user.email}
						onChange={e => changeUserEmail(e)}
					/>
				</Form.Field>
				<Form.Field>
					<label className='label'>Phone Number</label>
					<input
						type='tel'
						className='input'
						placeholder='Phone Number'
						value={formData.user.phone}
						onChange={e => changeUserPhone(e)}
					/>
				</Form.Field>
				<Link to='/read'>
					<Button
						className='form-btn'
						type='submit'
						onClick={() => updateUser(formData.user)}>
						Update
					</Button>
				</Link>
			</Form>
		</div>
	);
}
