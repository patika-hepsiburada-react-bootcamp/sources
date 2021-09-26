import React from 'react';

import styles from './styles.module.scss';
import logo from '../../assets/react-logo.png';

function ComponentA() {
  return (
    <div className={styles.name}>
      Component A
      <img src={logo} alt="" style={{ width: 200 }} />
    </div>
  );
}

export default ComponentA;
