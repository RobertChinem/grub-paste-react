import React from 'react'
import LandingPage from './Components/LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Components/Main/Main'

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<LandingPage/>} />
					<Route path='app/*' element={<Main/>} />		
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
