import { ComponentPropsWithoutRef } from 'react';
import styles from './TextInput.module.css';

type TextInputProps = ComponentPropsWithoutRef<'input'>;

function TextInput(props: TextInputProps) {
  return <input type="" className={styles.textInput} {...props} />;
}

export default TextInput;
