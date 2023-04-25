import { FC } from 'react'

interface ITabNavItemProps {
  id: string
  title: string
  activeTab: string
  setActiveTab: (id: string) => void
}

export const TabNavItem: FC<ITabNavItemProps> = ({
  id,
  title,
  activeTab,
  setActiveTab,
}) => {
  const handleClick = () => {
    setActiveTab(id)
  }
  return (
    <li onClick={handleClick} className={activeTab === id ? 'active-tab' : ''}>
      {title}
    </li>
  )
}
