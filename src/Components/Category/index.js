import React from "react";

import styles from './index.module.scss'

const Category = ({text}) => {
  return (
      <div className={styles.block}>
          <p className={styles.text}>{text}</p>
      </div>
  )
}

export default Category;
