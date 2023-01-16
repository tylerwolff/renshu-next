import React from 'react';
import Button from '../ui/Button';
import Text from '../ui/Text';
import ChevronRight from '../Icons/ChevronRight';
import styles from './QuizIntro.module.css';

type QuizIntroProps = {
  name: string;
  instructions: string | JSX.Element;
  children?: JSX.Element[] | JSX.Element;
  onStart(MouseEvent: any): void;
};

const QuizIntro = (props: QuizIntroProps) => {
  const { name, instructions, onStart } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.textCenter}>
        <h1>{name}</h1>
        <Text margin="0 0 2rem">{instructions}</Text>
        {props.children}
        <Button onClick={onStart}>
          Start quiz <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default QuizIntro;
