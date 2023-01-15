import Head from 'next/head';
import Image from 'next/image';
import 'sanitize.css';

import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import ProgressBar from '@/components/ui/ProgressBar';
import Text from '@/components/ui/Text';
import TextInput from '@/components/ui/TextInput';

export default function Home() {
  return (
    <>
      <Head>
        <title>Japanese Quiz - Daily Kana Practice</title>
        <meta name="title" content="Japanese Quiz - Daily Kana Practice" />
        <meta
          name="description"
          content="Improve your Japanese hiragana & katakana skills easily with daily language quizes."
        />
        <meta
          name="keywords"
          content="quiz,practice,japan,japanese,nihongo,hiragana,katakana,kana,flashcards,language"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#000000" />
        <meta name="author" content="Tyler Wolff" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.japanese-quiz.com" />
        <meta
          property="og:title"
          content="Japanese Quiz - Daily Kana Practice"
        />
        <meta
          property="og:description"
          content="Improve your Japanese hiragana & katakana skills easily with daily language quizes."
        />
        <meta property="og:image" content="" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.japanese-quiz.com" />
        <meta
          property="twitter:title"
          content="Japanese Quiz - Daily Kana Practice"
        />
        <meta
          property="twitter:description"
          content="Improve your Japanese hiragana & katakana skills easily with daily language quizes."
        />
        <meta property="twitter:image" content="" />
      </Head>
      <main>
        <Button type="button" onClick={() => alert('yo')}>
          This is a test
        </Button>
        <Badge>this is a test</Badge>
        <ProgressBar progress={50} />
        <Text>Yooooo....</Text>
        <TextInput type="email" placeholder="test@example.com" />
      </main>
      <div style={{ display: 'none' }}>
        <p>
          Improve your Japanese hiragana & katakana skills easily with daily
          language quizes. Quickly practice useful Japanese vocabulary,
          adjectives, verbs, and kanji with these quizes.
        </p>
      </div>
    </>
  );
}
