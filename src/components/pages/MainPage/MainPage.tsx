import { Breadcrumbs } from '../../Breadcrumbs/Breadcrumbs'
import { Title } from '../../UI/Title/Title'
import './MainPage.scss'

export const MainPage = () => {
	return (
		<>
			<div className='statistics'>
				<Breadcrumbs /> <Title classname='title-h2' title='Главная страница' />
				<div className='statistics__wrapper'></div>
			</div>
		</>
	)
}
