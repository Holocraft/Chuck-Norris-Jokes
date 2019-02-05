import React from 'react';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.navMain}>
      <nav className={styles.navWrapper}>
        <div className="nav-wrapper">
          <div className="brand-logo center">Chuck Norris Jokes</div>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <img
                className={styles.navLogo}
                src={'/assets/chuck-norris.jpg'}
                alt="chuck"
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
