import React from "react";
import {NavLink} from "react-router-dom";
import classes from "classnames";

import styles from './index.module.scss'

const Category = ({id, text, url}) => {
  return (
     <NavLink
         to={`/category/${url}`}
         className={styles.block}
     >
         <div className={classes(styles.cell, styles.center)}>
             <p className={styles.id}>{id}</p>
             <span className={classes(styles.triangle, styles.sm)}>
                 <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fillRule="evenodd" clipRule="evenodd" d="M16.1094 0C16.1094 8.62413 9.00889 15.6154 0.25 15.6154C9.00889 15.6154 16.1094 22.6066 16.1094 31.2308C16.1094 22.6066 23.2099 15.6154 31.9688 15.6154C23.2099 15.6154 16.1094 8.62413 16.1094 0Z" fill="#24262D"/>
                 </svg>
             </span>
         </div>
         <div className={styles.cell}>
             <h4 className={styles.name}>{text}</h4>
             <span className={styles.smile}>
                 <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <ellipse cx="15.6786" cy="15.4691" rx="14.4691" ry="14.3214" transform="rotate(90 15.6786 15.4691)" fill="#DCF26C" stroke="#24262D" stroke-width="2"/>
                     <ellipse cx="11.7453" cy="13.2987" rx="3.25554" ry="1.49284" transform="rotate(90 11.7453 13.2987)" fill="#23262D"/>
                     <ellipse cx="19.2844" cy="13.2987" rx="3.25554" ry="1.49284" transform="rotate(90 19.2844 13.2987)" fill="#23262D"/>
                     <path d="M6.63519 16.5543C7.64803 25.6318 22.4065 26.7525 24.7215 16.5543" stroke="#23262D" strokeWidth="2"/>
                 </svg>
             </span>
             <span className={classes(styles.triangle, styles.lg)}>
                 <svg width="88" height="81" viewBox="0 0 88 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <ellipse cx="44" cy="40.6859" rx="43" ry="39.281"/>
                     <path d="M43.7358 1.40494C8.12086 1.40494 7.59709 79.9669 43.7358 79.9669" />
                     <path d="M43.7363 1.40494C79.3513 1.40494 79.875 79.9669 43.7363 79.9669" />
                     <path d="M87 41.0909C87 67.8907 1.52761 68.2848 1.52761 41.0909" />
                     <path d="M1.52771 41.9008C1.52771 15.101 87.0001 14.7068 87.0001 41.9008" />
                     <path d="M43.6446 1V80.3719" />
                     <path d="M1.26373 41.4958C2.31895 41.4958 58.8609 41.4958 86.9999 41.4958" />
                     <path fillRule="evenodd" clipRule="evenodd" d="M20.9009 42.3589C21.3707 42.3237 21.8447 42.3058 22.3223 42.3058C34.0983 42.3058 43.6446 53.1841 43.6446 66.6033C43.6446 53.7284 52.4323 43.1924 63.5455 42.3589V42.2526C52.4323 41.4191 43.6446 30.8831 43.6446 18.0082C43.6446 31.4274 34.0983 42.3058 22.3223 42.3058C21.8447 42.3058 21.3707 42.2879 20.9009 42.2526V42.3589Z" fill="#F26C6C"/>
                 </svg>
             </span>
         </div>
     </NavLink>
  )
}

export default Category
