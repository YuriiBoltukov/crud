import User from '../models/user.model';

export const crud = {
	/**
	 * method for getting users
	 * @returns {Promise<User[]>}
	 */
	getUsers: () => {
		return fetch('https://fakestoreapi.com/users').then(res => res.json());
	},

	/**
	 * method for getting user by id
	 * @param {number} id
	 * @returns {Promise<User>}
	 */
	getUserById: id => {
		return fetch(`https://fakestoreapi.com/users/${id}`).then(res =>
			res.json()
		);
	},

	/**
	 * method for updating user
	 * @param {User} user
	 * @returns {Promise<void>}
	 */
	updateUser: user => {
		return fetch(`https://fakestoreapi.com/users/${user?.id}`, {
			method: 'PUT',
			body: JSON.stringify(user),
		}).then(res => res.json());
	},

	/**
	 * method for creating user
	 * @param {User} user
	 * @returns {Promise<number>}
	 */
	createUser: user => {
		return fetch('https://fakestoreapi.com/users', {
			method: 'POST',
			body: JSON.stringify(user),
		}).then(res => res.json());
	},

	/**
	 * method for deleting user
	 * @param {number} id
	 * @returns {Promise<void>}
	 */
	deleteUser: id => {
		return fetch(`https://fakestoreapi.com/users/${id}`, {
			method: 'DELETE',
		}).then(res => res.json());
	},
};
