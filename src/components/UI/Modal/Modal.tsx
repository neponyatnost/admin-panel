import { FC } from 'react'
import './Modal.scss'

interface IModalProps {
  isVisible: boolean
  title: string
  content?: React.ReactNode | string
  footer?: React.ReactNode | string
  onClose: () => any
}

export const Modal: FC<IModalProps> = ({
  isVisible = false,
  title,
  content,
  footer,
  onClose,
}) => {
  return !isVisible ? null : (
    <div className='modal' onClick={onClose}>
      <div className='modal-dialog' onClick={(e) => e.stopPropagation()}>
        <div className='modal-header'>
          <h3 className='modal-title'>{title}</h3>
          <span className='modal-close' onClick={onClose}>
            &times;
          </span>
        </div>
        <div className='modal-body'>
          <div className='modal-content'>{content}</div>
        </div>
        {footer && <div className='modal-footer'>{footer}</div>}
      </div>
    </div>
  )
}
