import React, { Component } from 'react';
import Button from '../ui/Button';
import ProgressBar from '../ui/ProgressBar';
import TextInput from '../ui/TextInput';
import styles from './VocabularyQuiz.module.css';

interface Word {
  hiragana: string;
  romaji: string;
  english: string;
  answers: Array<string>;
}

type VocabularyQuizProps = {
  words: Word[];
  placeholder: string;
  questionKey: string;
  hintKey: string;
};

type VocabularyQuizState = {
  words: Word[];
  currentWord: Word;
  inputPlaceholder: string;
  initialLength: number;
  answer?: string;
};

class VocabularyQuiz extends Component<
  VocabularyQuizProps,
  VocabularyQuizState
> {
  static defaultProps = {
    placeholder: 'Enter English meaning',
    questionKey: 'hiragana',
    hintKey: 'romaji',
  };

  constructor(props: VocabularyQuizProps) {
    super(props);

    const words = [...props.words];

    this.state = {
      words,
      initialLength: words.length,
      currentWord: words[0],
      answer: '',
      inputPlaceholder: props.placeholder,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value.toLowerCase();
    const { currentWord } = this.state;

    if (val.includes('?')) {
      return this.setState({
        answer: currentWord.answers[0],
      });
    }

    if (currentWord.answers.includes(val)) {
      const remainingCharacters = this.state.words.slice(1);
      return this.setState({
        words: remainingCharacters,
        currentWord: remainingCharacters[0],
        answer: '',
      });
    }

    this.setState({ answer: val });
  }

  render() {
    const { words, currentWord, answer, initialLength, inputPlaceholder } =
      this.state;
    const { placeholder, questionKey, hintKey } = this.props;
    const progress = ((initialLength - words.length) / initialLength) * 100;
    const questionKeyTyped = questionKey as keyof Word;
    const hintKeyTyped = hintKey as keyof Word;

    return (
      <>
        <ProgressBar progress={progress} />
        <div className={styles.wrapper}>
          <div className={styles.content}>
            {currentWord ? (
              <>
                <h1 className={styles.prompt}>
                  {currentWord[questionKeyTyped]}
                </h1>
                <p className={styles.hint}>{currentWord[hintKeyTyped]}</p>
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
                  <img src="/assets/round-chevron_right-24px" alt="" />
                </Button>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default VocabularyQuiz;
