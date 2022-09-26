import styles from './index.module.scss'

const Container = ({children}) => {
  return (
    <div className={styles.block}>
      {children}
    </div>
  );
};

export default Container;
