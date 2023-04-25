import React, { FC, useEffect, useState } from 'react'
import './RippleButton.scss'

interface IRippleButtonProps {
	children: React.ReactNode | string
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
	disabled?: boolean
}

export const RippleButton: FC<IRippleButtonProps> = ({
	children,
	onClick,
	disabled
}) => {
	const [coords, setCoords] = useState({ x: -1, y: -1 })
	const [isRippling, setIsRippling] = useState(false)
	useEffect(() => {
		if (coords.x !== -1 && coords.y !== -1) {
			setIsRippling(true)
			setTimeout(() => setIsRippling(false), 300)
		} else setIsRippling(false)
	}, [coords])
	useEffect(() => {
		if (!isRippling) setCoords({ x: -1, y: -1 })
	}, [isRippling])
	return (
		<button
			className='ripple-button'
			onClick={(event) => {
				const rect = event.currentTarget.getBoundingClientRect()
				setCoords({ x: event.clientX - rect.left, y: event.clientY - rect.top })
				onClick && onClick(event)
			}}
			disabled={disabled}
		>
			{isRippling ? (
				<span
					className='ripple'
					style={{
						left: coords.x,
						top: coords.y
					}}
				/>
			) : (
				''
			)}
			<span className='content'>{children || 'Кнопка'}</span>
		</button>
	)
}
