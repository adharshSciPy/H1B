import React from 'react';
import styles from './header.module.css';
import { SearchOutlined, BellOutlined } from '@ant-design/icons';

function Header() {
  return (
    <div className={styles.headerMain}>
      <div className={styles.settingsSearchBar}>
        <SearchOutlined className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search here..."
          className={styles.searchInput}
        />
      </div>
      <div className={styles.rightSection}>
        <BellOutlined className={styles.bellIcon} />
        <div className={styles.avatarDiv}></div>
      </div>
    </div>
  );
}

export default Header;
