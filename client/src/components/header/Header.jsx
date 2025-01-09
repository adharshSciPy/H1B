import React, { useState, useEffect, useRef } from 'react';
import styles from './header.module.css';
import { SearchOutlined, BellOutlined } from '@ant-design/icons';

function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null); // Create a reference for the dropdown
  const bellIconRef = useRef(null); // Create a reference for the bell icon

  const openDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // Close the dropdown if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target) && // Clicked outside dropdown
        bellIconRef.current && !bellIconRef.current.contains(event.target) // Clicked outside bell icon
      ) {
        setIsDropdownVisible(false); // Close dropdown
      }
    };

    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
        {/* Bell Icon */}
        <BellOutlined
          className={styles.bellIcon}
          onClick={openDropdown}
          ref={bellIconRef}
        />
        <div className={styles.avatarDiv}></div>

        {/* Notification Dropdown */}
        <div
          ref={dropdownRef} // Add ref to the dropdown div
          className={`${styles.headerNotificationDropdown} ${
            isDropdownVisible ? styles.visible : ''
          }`}
        >
          <div className={styles.headerNotificationList}>
            <ul>
              <li>Notification 1</li>
              <li>Notification 2</li>
              <li>Notification 3</li>
              <li>Notification 4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
