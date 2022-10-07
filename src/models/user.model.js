export default class User {
	constructor(user) {
		this.id = user?.id;
		this.email = user?.email;
		this.username = user?.username;
		this.phone = user?.phone;
	}
}
