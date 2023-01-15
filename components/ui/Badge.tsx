import { PropsWithChildren } from 'react';
import styles from './Badge.module.css';

function Badge(props: PropsWithChildren) {
  return <span className={styles.badge}>{props.children}</span>;
}

export default Badge;
