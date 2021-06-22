import React from 'react'
import Header from '../Header'
import { Routes, Route } from 'react-router-dom'
import Menu from './Menu'
import CreatePage from '../CreatePage/CreatePage'
import SearchPage from '../SearchPage/SearchPage'
import ContentView from '../ContentView'


const Main = () => {
	return (
		<div>
			<Header />
			<Routes>
				<Route path='/' element={<Menu />} />
				<Route path='create' element={<CreatePage />} />
				<Route path='search' element={<SearchPage />} />
				<Route path='view/:id' element={<ContentView />} />
			</Routes>
		</div>
	)
}

export default Main
