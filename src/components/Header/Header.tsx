import { FC, useState } from 'react'
import { useAppDispatch } from '../../hooks/redux'
import logout from '../../img/log-out.svg'
import photo from '../../img/user-profile-photo.jpg'
import { removeUser } from '../../store/reducers/authSlice'
import { Burger } from '../Burger/Burger'
import './Header.scss'
import { HeaderLinks } from './HeaderLinks'

export const Header: FC = () => {
	const [menuActive, setMenuActive] = useState(false)
	const dispatch = useAppDispatch()

	return (
		<div className='header'>
			<div className='header__container'>
				<img
					src={logo}
					alt='Header logo'
					width={114}
					height={41}
					className='max-width-480'
				/>
				<div className='header__navigation navigation-header'>
					<div className='navigation-header-logo logo-header'>
						<img src='https://placehold.co/114x41' alt='Header logo' width={114} height={41} />
					</div>
					<div className='navigation-header__menu menu-header'>
						<HeaderLinks />
					</div>
				</div>
				<div className='header__navigation-user user-header'>
					<div className='user-header__info info-user'>
						<div className='info-user__name'>Андрей</div>
						<div className='info-user__role'>Администратор</div>
					</div>
					<div className='user-header__photo'>
						<img src={photo} alt='User' width={42} height={42} />
					</div>
					<div className='user-header__logout'>
						<img
							src={logout}
							alt='Logout'
							onClick={() => dispatch(removeUser())}
						/>
					</div>
				</div>
				<div
					className={menuActive ? 'burger-btn btn-active' : 'burger-btn'}
					onClick={() => setMenuActive(!menuActive)}
				>
					<span />
				</div>
				<Burger active={menuActive} setActive={setMenuActive} />
			</div>
		</div>
	)
}
