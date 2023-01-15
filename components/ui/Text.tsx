import { PropsWithChildren } from 'react';
import styles from './Text.module.css';

type TextProps = {
  margin?: string;
} & PropsWithChildren;

function Text(props: TextProps) {
  return (
    <p className={styles.text} style={{ margin: props.margin }}>
      {props.children}
    </p>
  );
}

export default Text;
