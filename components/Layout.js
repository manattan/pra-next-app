import styles from "../styles/main.module.css";

const Layout = ({children}) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;
