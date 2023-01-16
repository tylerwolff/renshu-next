import { useState } from 'react';
import Head from 'next/head';
import QuizIntro from '@/components/QuizIntro';
import VocabularyQuiz from '@/components/VocabularyQuiz';
import { basic } from '@/data/verbs.json';

const Verbs = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const words = basic.sort(() => 0.5 - Math.random());

  return (
    <>
      <Head>
        <title>Verbs - Japanese Quiz</title>
      </Head>
      <main>
        {startQuiz ? (
          <VocabularyQuiz
            words={words}
            placeholder="Enter english translation"
          />
        ) : (
          <QuizIntro
            name="Verbs - Basics"
            instructions="To complete this quiz, type in the English translation of each verb."
            onStart={() => setStartQuiz(true)}
          />
        )}
      </main>
    </>
  );
};

export default Verbs;
