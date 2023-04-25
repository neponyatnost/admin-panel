import { FC } from 'react'
import { TabNavItem } from './TabNavItem'
import './Tabs.scss'

interface ITabsProps {
  firstTabNavTitle: string
  secondTabNavTitle: string
  children?: React.ReactNode
  activeTab: string
  setActiveTab: (id: string) => void
}

export const Tabs: FC<ITabsProps> = ({
  activeTab,
  setActiveTab,
  firstTabNavTitle,
  secondTabNavTitle,
  children,
}) => {
  return (
    <div className='tabs'>
      <ul className='tab-nav'>
        <TabNavItem
          title={firstTabNavTitle}
          id='tab1'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title={secondTabNavTitle}
          id='tab2'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
      <div className='outlet'>
        {/* <TabContent activeTab={activeTab} id='tab1'>
          {'firstTabContent'}
        </TabContent>
        <TabContent activeTab={activeTab} id='tab2'>
          {'secondTabContent'}
        </TabContent> */}
        {children}
      </div>
    </div>
  )
}
