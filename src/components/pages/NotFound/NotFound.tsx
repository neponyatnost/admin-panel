import { Link } from 'react-router-dom'
import './NotFound.scss'

export const NotFound = () => {
	return (
		<div className='statistics'>
			<div className='statistics__wrapper'>
				<div className='not-found'>
					<h1>Страница не найдена</h1>
					<Link to='/'>На главную</Link>
				</div>
			</div>
		</div>
	)
}
