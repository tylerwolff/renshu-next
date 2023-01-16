import Head from 'next/head';
import Nav from '@/components/Nav';
import VocabularyQuiz from '@/components/VocabularyQuiz';
import QuizIntro from '@/components/QuizIntro';
import adjectives from '@/data/adjectives.json';
import { useState } from 'react';

export default function Adjectives() {
  const [startQuiz, setStartQuiz] = useState(false);
  const randomizedAdjectives = adjectives.vocabulary.sort(
    () => 0.5 - Math.random()
  );

  return (
    <>
      <Head>
        <title>Japanese Quiz - Adjectives</title>
        <meta name="title" content="Japanese Quiz - Adjectives" />
      </Head>
      <main>
        <Nav />
        {startQuiz ? (
          <VocabularyQuiz
            words={randomizedAdjectives}
            placeholder="Enter english translation"
            questionKey="hiragana"
            hintKey="romaji"
          />
        ) : (
          <QuizIntro
            name="Adjectives"
            instructions={
              <span>
                To complete this quiz, type in the English translation of each
                adjective. The quiz includes both <strong>i</strong> and{' '}
                <strong>na</strong> adjectives.
              </span>
            }
            onStart={() => setStartQuiz(true)}
          />
        )}
      </main>
    </>
  );
}
