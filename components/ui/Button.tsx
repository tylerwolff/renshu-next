import { ComponentPropsWithoutRef } from 'react';
import styles from './Button.module.css';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

function Button(props: ButtonProps) {
  return (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  );
}

export default Button;
