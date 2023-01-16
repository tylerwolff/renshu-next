import { useState } from 'react';
import Head from 'next/head';
import Nav from '@/components/Nav';
import KanaQuiz from '@/components/KanaQuiz';
import QuizIntro from '@/components/QuizIntro';
import numbers from '@/data/numbers';

const QuizNumbers = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const randomizedNumbers = numbers.slice().sort(() => 0.5 - Math.random());

  return (
    <>
      <Head>
        <title>Kanji numbers - Japanese Quiz</title>
      </Head>
      <main>
        <Nav />
        {startQuiz ? (
          <KanaQuiz
            questions={randomizedNumbers}
            placeholder="Enter number or sound"
          />
        ) : (
          <QuizIntro
            name="Kanji - Basic Numbers"
            instructions="To complete this quiz, type in either the romaji or number corresponding to each kanji character. The quiz includes the numbers 1-10, 100, 1000, and 10000."
            onStart={() => setStartQuiz(true)}
          />
        )}
      </main>
    </>
  );
};

export default QuizNumbers;
