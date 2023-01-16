import { useState } from 'react';
import Head from 'next/head';
import Nav from '@/components/Nav';
import KanaQuiz from '@/components/KanaQuiz';
import QuizIntro from '@/components/QuizIntro';

// Character sets
import hiragana from '@/data/hiragana';
import hiraganaYoon from '@/data/hiragana-yoon';
import katakana from '@/data/katakana';
import katakanaYoon from '@/data/katakana-yoon';

interface Row {
  key: string;
  name: string;
  description: string;
}

interface Character {
  character: string;
  sound: string;
  romaji: string;
  row?: Row;
}

interface SettingObject {
  hiragana?: boolean;
  katakana?: boolean;
  yoon?: boolean;
}

const getInitialSettings = (): SettingObject => {
  return {
    hiragana: true,
    katakana: true,
    yoon: true,
  };
};

const Kana = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const [settings, setSettings] = useState(getInitialSettings());

  let chars: Array<Character> = [];

  if (settings.hiragana) {
    chars = chars.concat(hiragana);
    if (settings.yoon) chars = chars.concat(hiraganaYoon);
  }
  if (settings.katakana) {
    chars = chars.concat(katakana);
    if (settings.yoon) chars = chars.concat(katakanaYoon);
  }
  if (settings.yoon && !settings.hiragana && !settings.katakana) {
    chars = hiraganaYoon.concat(katakanaYoon);
  }

  const questions = chars.sort(() => 0.5 - Math.random());

  const setSettingsOption = (setting: SettingObject) => {
    setSettings({
      ...settings,
      ...setting,
    });
  };

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
        <Nav />
        {startQuiz ? (
          <KanaQuiz questions={questions} />
        ) : (
          <QuizIntro
            name="Hiragana &amp; Katakana"
            instructions="To complete this quiz, type in the sound or romaji of each character. Focus on your speed and accuracy."
            onStart={() => setStartQuiz(true)}
          >
            <form style={{ marginBottom: '1em' }}>
              <div>
                <label>
                  <input
                    name="hiragana"
                    type="checkbox"
                    checked={settings.hiragana}
                    onChange={() =>
                      setSettingsOption({
                        hiragana: !settings.hiragana,
                      })
                    }
                    style={{ margin: '0 1em 1em 0' }}
                  />
                  <strong>Hiragana</strong> ひらがな
                </label>
              </div>
              <div>
                <label>
                  <input
                    name="katakana"
                    type="checkbox"
                    checked={settings.katakana}
                    onChange={() =>
                      setSettingsOption({
                        katakana: !settings.katakana,
                      })
                    }
                    style={{ margin: '0 1em 1em 0' }}
                  />
                  <strong>Katakana</strong> カタカナ
                </label>
              </div>
              <div>
                <label>
                  <input
                    name="yoon"
                    type="checkbox"
                    checked={settings.yoon}
                    onChange={() =>
                      setSettingsOption({
                        yoon: !settings.yoon,
                      })
                    }
                    style={{ margin: '0 1em 1em 0' }}
                  />
                  <strong>Yōon</strong> ようおん
                </label>
              </div>
            </form>
          </QuizIntro>
        )}
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
};

export default Kana;
