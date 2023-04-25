import { Route, Routes } from 'react-router-dom'
import { Aside } from './components/Aside/Aside'
import { Container } from './components/Container/Container'
import { Header } from './components/Header/Header'
import { AdminPage } from './components/pages/AdminPage/AdminPage'
import { Clients } from './components/pages/Clients/Clients'
import { Finances } from './components/pages/Finances/Finances'
import { MainPage } from './components/pages/MainPage/MainPage'
import { Manufacturers } from './components/pages/Manufacturers/Manufacturers'
import { NotFound } from './components/pages/NotFound/NotFound'
import { Settings } from './components/pages/Settings/Settings'

export const App = () => {
	return (
		<>
			<Header />
			<Container>
				<Aside />
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/admin' element={<AdminPage />} />
					<Route path='/clients/:clientId?/:edit?' element={<Clients />} />
					<Route
						path='/manufacturers/:manufacturerId?'
						element={<Manufacturers />}
					/>
					<Route
						path='/manufacturer-client/:userId?'
						element={<Manufacturers />}
					/>
					<Route path='/finances' element={<Finances />} />
					<Route path='/settings' element={<Settings />} />
					<Route path='/*' element={<NotFound />} />
				</Routes>
			</Container>
		</>
	)
}
