import {useState} from "react";
import classes from "classnames";

import AnchorLink from "react-anchor-link-smooth-scroll";

import styles from './index.module.scss'

const Menu = ({data, action}) => {
  const [active, setActive] = useState(-1)

  return (
      <menu className={styles.block}>
          <AnchorLink
              href={`#section-0`}
              className={classes(styles.item, active === 0 && styles.active)}
              onClick={() => {
                  action(!data)
                  setActive(0)
              }}
          >
              Home
          </AnchorLink>
          <AnchorLink
              href={`#section-1`}
              className={classes(styles.item, active === 1 && styles.active)}
              onClick={() => {
                  action(!data)
                  setActive(1)
              }}
          >
              Portfolio
          </AnchorLink>
          <AnchorLink
              href={`#section-2`}
              className={classes(styles.item, active === 3 && styles.active)}
              onClick={() => {
                  action(!data)
                  setActive(3)
              }}
          >
              Contact
          </AnchorLink>
      </menu>
  )
}

export default Menu;
