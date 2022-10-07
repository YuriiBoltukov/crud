import { useState } from 'react';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import { Link, Route, Routes } from 'react-router-dom';

function App(props) {
	const [id, setId] = useState(0);
	const [username, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	return (
		<div className='main'>
			<h1>React CRUD SPA</h1>
			<div>
				<div className='btn-wrapper'>
					<Link to='/read'>
						<button className='table-btn'>Read</button>
					</Link>
					<Link to='/create'>
						<button className='table-btn'>Create</button>
					</Link>
				</div>
			</div>
			<Routes>
				<Route
					path='/update'
					element={
						<Update
							id={id}
							setId={setId}
							username={username}
							setUserName={setUserName}
							email={email}
							setEmail={setEmail}
							phone={phone}
							setPhone={setPhone}
						/>
					}
				/>
				<Route path='/read' element={<Read />} />
				<Route
					path='/create'
					element={
						<Create
							username={username}
							setUserName={setUserName}
							email={email}
							setEmail={setEmail}
							phone={phone}
							setPhone={setPhone}
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
