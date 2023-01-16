import React, { Component } from 'react';
import Button from '../ui/Button';
import ProgressBar from '../ui/ProgressBar';
import TextInput from '../ui/TextInput';
import styles from './KanaQuiz.module.css';

interface Row {
  key: string;
  name: string;
  description: string;
}

interface Character {
  character: string;
  sound: string;
  romaji: string;
  row?: Row[];
}

type QuizProps = {
  questions: Character[];
  placeholder: string;
};

type QuizState = {
  all: Character[];
  current: Character;
  initialLength: number;
  answer?: string;
  inputPlaceholder?: string;
};

class Quiz extends Component<QuizProps, QuizState> {
  static defaultProps = {
    placeholder: 'Enter sound (romaji)',
  };

  constructor(props: QuizProps) {
    super(props);

    const all = [...props.questions];

    this.state = {
      all,
      initialLength: all.length,
      current: all[0],
      answer: '',
      inputPlaceholder: props.placeholder,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value.trim().toLowerCase();
    const { current } = this.state;

    if (val.includes('?')) {
      return this.setState({
        answer: current.sound,
      });
    }

    if (val === current.sound || val === current.romaji) {
      const remainingCharacters = this.state.all.slice(1);
      return this.setState({
        all: remainingCharacters,
        current: remainingCharacters[0],
        answer: '',
      });
    }

    this.setState({ answer: val });
  }

  render() {
    const { all, current, answer, initialLength, inputPlaceholder } =
      this.state;
    const { placeholder } = this.props;
    const progress = ((initialLength - all.length) / initialLength) * 100;

    return (
      <>
        <ProgressBar progress={progress} />
        <div className={styles.wrapper}>
          <div className={styles.content}>
            {current ? (
              <>
                <h1 className={styles.prompt}>{current.character}</h1>
                <TextInput
                  type="text"
                  value={answer}
                  onChange={this.handleChange}
                  placeholder={inputPlaceholder}
                  onBlur={() =>
                    this.setState({ inputPlaceholder: placeholder })
                  }
                  onFocus={() => this.setState({ inputPlaceholder: '' })}
                  autoFocus={true}
                />
              </>
            ) : (
              <>
                <h1 className={styles.prompt}>すごいよ!</h1>
                <Button onClick={() => window.location.reload()}>
                  Start again{' '}
                  <img src="/assets/round-chevron_right-24px.svg" alt="" />
                </Button>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Quiz;
