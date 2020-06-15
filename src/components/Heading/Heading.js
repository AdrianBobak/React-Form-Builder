import React from 'react';
import styles from './Heading.module.scss';

const Heading = ({ children }) => (
  <header className={styles.header}>
    <span className={styles.credits}>
      Created by:{' '}
      <a
        href="https://www.linkedin.com/in/bobakadrian/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Adrian Bobak
      </a>
    </span>
    <h1>{children}</h1>
  </header>
);

export default Heading;
