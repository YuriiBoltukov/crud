import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { crud } from '../services/crud.service';

export default function Read() {
	const [users, setUsers] = useState();

	async function getUsers() {
		const response = await crud.getUsers();
		setUsers(response);
	}

	async function deleteUser(id) {
		await crud.deleteUser(id);
		setUsers(prev => prev.filter(user => user?.id !== id));
	}

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div>
			<Table singleLine>
				<Table.Header>
					<Table.Row className='table'>
						<Table.HeaderCell className='table-header'>
							User name
						</Table.HeaderCell>
						<Table.HeaderCell className='table-header'>Email</Table.HeaderCell>
						<Table.HeaderCell className='table-header'>
							Phone number
						</Table.HeaderCell>
						<Table.HeaderCell className='table-header'>Update</Table.HeaderCell>
						<Table.HeaderCell className='table-header'>Delete</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{users?.map(user => {
						return (
							<Table.Row key={user.id}>
								<Table.Cell>{user.username}</Table.Cell>
								<Table.Cell>{user.email}</Table.Cell>
								<Table.Cell>{user.phone}</Table.Cell>

								<Table.Cell>
									<Link to='/update' state={{ userId: user.id }}>
										<Button className='table-btn'>Update</Button>
									</Link>
								</Table.Cell>

								<Table.Cell>
									<Button
										className='table-btn'
										onClick={() => deleteUser(user.id)}>
										Delete
									</Button>
								</Table.Cell>
							</Table.Row>
						);
					})}
				</Table.Body>
			</Table>
		</div>
	);
}
