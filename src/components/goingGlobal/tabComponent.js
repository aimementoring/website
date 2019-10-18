import React, { useState } from 'react';
import styles from './goingGlobal.module.scss';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  
  const onTabClick = (tabName) => () => {
    setActiveTab(tabName);
  }

  return (
  <div className={styles.tabComponentContainer}>
    <div className={styles.tabDivContainer}>
      <ul className={styles.tabDivContainer}>
        <li className={`${styles.tab} ${activeTab === 'tab1' ? styles.activeTab : ''}`} onClick={onTabClick('tab1')}>
          <span>tab1</span>
        </li>
        <li className={`${styles.tab} ${activeTab === 'tab2' ? styles.activeTab : ''}`} onClick={onTabClick('tab2')}>
          <span>tab2</span>
        </li>
        <li className={`${styles.tab} ${activeTab === 'tab3' ? styles.activeTab : ''}`} onClick={onTabClick('tab3')}>
          <span>tab3</span>
        </li>
      </ul>
    </div>
    {activeTab === 'tab1' &&
    <div>TAB 1 Clicked</div>}
    {activeTab === 'tab2' &&
    <div>TAB 2 Clicked</div>}
    {activeTab === 'tab3' &&
    <div>TAB 3 Clicked</div>}
  </div>
  )
}

export default TabComponent;