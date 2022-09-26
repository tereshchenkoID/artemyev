import React from "react";

import styles from './index.module.scss'

const TextDecor = ({text}) => {
  return (
      <div className={styles.block}>
          <span className={styles.icon}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.8461 0C13.8461 7.64698 7.64698 13.8461 0 13.8461C7.64698 13.8461 13.8461 20.0452 13.8461 27.6922C13.8461 20.0452 20.0452 13.8461 27.6922 13.8461C20.0452 13.8461 13.8461 7.64698 13.8461 0Z" fill="#F1F3E8"/>
              </svg>
          </span>
          <p className={styles.text}>{text}</p>
      </div>
  )
}

export default TextDecor;
