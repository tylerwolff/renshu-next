import { useState } from 'react';
import Head from 'next/head';
import Nav from '@/components/Nav';
import VocabularyQuiz from '@/components/VocabularyQuiz';
import QuizIntro from '@/components/QuizIntro';
import Text from '@/components/ui/Text';
import weekdays from '@/data/weekdays.json';

const KanjiWeekdays = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const vocabulary = weekdays.vocabulary
    .slice(0)
    .sort(() => 0.5 - Math.random());

  return (
    <>
      <Head>
        <title>Kanji weekdays - Japanese Quiz</title>
      </Head>
      <main>
        <Nav />
        {startQuiz ? (
          <VocabularyQuiz
            words={vocabulary}
            placeholder="Enter english translation"
            questionKey="kanji"
            hintKey="hiragana"
          />
        ) : (
          <QuizIntro
            name="Kanji - Weekdays"
            instructions="To complete this quiz, type in the weekday corresponding to each Japanese day."
            onStart={() => setStartQuiz(true)}
          >
            <Text>
              <a
                href="https://nipponrama.com/days-week-japanese/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
              </a>
            </Text>
          </QuizIntro>
        )}
      </main>
    </>
  );
};

export default KanjiWeekdays;
