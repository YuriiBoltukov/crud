import React, { useEffect, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { crud } from '../services/crud.service';
import { useLocation } from 'react-router-dom';

export default function Update(props) {
	const [formData, setFormData] = useState({ user: {} });
	const location = useLocation();
	const { userId } = location.state;

	async function getUserData(userId) {
		const data = await crud.getUserById(userId);
		setFormData({ user: data });
	}

	useEffect(() => {
		getUserData(userId);
	}, [userId]);

	return (
		<div>
			<Form className='create-form'>
				<Form.Field>
					<label className='label'>User Name</label>
					<input
						type='text'
						className='input input-username'
						placeholder='User Name'
						value={formData.user.username}
						//onChange={e => userHandler(e)}
					/>
				</Form.Field>
				<Form.Field>
					<label className='label input-email'>Email</label>
					<input
						type='email'
						className='input'
						placeholder='Email'
						value={formData.user.email}
						//onChange={e => emailHandler(e)}
					/>
				</Form.Field>
				<Form.Field>
					<label className='label'>Phone Number</label>
					<input
						type='tel'
						className='input'
						placeholder='Phone Number'
						value={formData.user.phone}
						//onChange={e => phoneHandler(e)}
					/>
				</Form.Field>
				<Button className='form-btn' type='submit'>
					Update
				</Button>
			</Form>
		</div>
	);
}
