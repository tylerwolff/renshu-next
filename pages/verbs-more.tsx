import { useState } from 'react';
import Head from 'next/head';
import Nav from '@/components/Nav';
import QuizIntro from '@/components/QuizIntro';
import VocabularyQuiz from '@/components/VocabularyQuiz';
import verbs from '@/data/verbs.json';

const VerbsMore = (props: any) => {
  const [startQuiz, setStartQuiz] = useState(false);
  const words = verbs.basic_more.sort(() => 0.5 - Math.random());

  return (
    <>
      <Head>
        <title>More Verbs - Japanese Quiz</title>
      </Head>
      <main>
        <Nav />
        {startQuiz ? (
          <VocabularyQuiz
            words={words}
            placeholder="Enter english translation"
          />
        ) : (
          <QuizIntro
            name="Verbs - More"
            instructions="To complete this quiz, type in the English translation of each verb."
            onStart={() => setStartQuiz(true)}
          />
        )}
      </main>
    </>
  );
};

export default VerbsMore;
