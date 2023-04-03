import { useState } from 'react';
import { WordsContext } from '../resources/wordsContext';

function WordsProvider({ children }) {
  const [wordsData, setWordsData] = useState([]);
  const [botGuess, setBotGuess] = useState([]);
  const [difficulty, setDifficulty] = useState('Easy');

  function addWord(word, guessedWord, correctLetters) {
    setWordsData([
      ...wordsData,
      {
        word: word,
        wordLetters: Array.from(word),
        guessedWord: guessedWord,
        guessedWordLetters: Array.from(guessedWord),
        correctLetters: correctLetters,
      },
    ]);
  }

  function addBotWord(word, guessedWord, correctLetters) {
    setBotGuess([
      ...botGuess,
      {
        word: word,
        wordLetters: Array.from(word),
        guessedWord: guessedWord,
        guessedWordLetters: Array.from(guessedWord),
        correctLetters: correctLetters,
      },
    ]);
  }

  function changeDiff(diff) {
    setDifficulty(diff);
  }

  const contextValue = {
    words: wordsData,
    botGuesses: botGuess,
    difficulty: difficulty,
    addWord,
    addBotWord,
    changeDiff,
  };

  return (
    <WordsContext.Provider value={contextValue}>
      {children}
    </WordsContext.Provider>
  );
}

export { WordsProvider };
