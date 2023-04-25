import { FC } from 'react'

interface ITabContentProps {
  id?: string
  activeTab?: string
  children?: React.ReactNode
}

export const TabContent: FC<ITabContentProps> = ({
  id,
  activeTab,
  children,
}) => {
  if (activeTab === id) {
    return <div className='tab-content'>{children}</div>
  }
  return null
}
