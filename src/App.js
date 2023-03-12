import React from 'react';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import AddUser from './Components/AddUser';
import AllUser from './Components/AllUser';
import EditUser from './Components/EditUser';
import Home from './Components/Home';
import Navbar from './Components/Navbar';


function App(){
	return (
		<BrowserRouter>
			<Navbar/>
			<Routes>
				<Route path='/' element={<Home />} />	
				<Route path='/add' element={<AddUser/>} />	
				<Route path='/all' element={<AllUser/>} />
				<Route path='/edit/:id' element={<EditUser/>} />
			</Routes>
			</BrowserRouter>
	);
	
}

export default App;
