import { Breadcrumbs } from '../../Breadcrumbs/Breadcrumbs'
import { Title } from '../../UI/Title/Title'

export const AdminPage = () => {
	return (
		<div className='statistics'>
			<Breadcrumbs />
			<Title classname='title-h2' title='Страница администратора' />
			<div className='statistics__wrapper'></div>
		</div>
	)
}
