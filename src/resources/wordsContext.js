import { createContext } from 'react';

const WordsContext = createContext({
  words: [],
  botGuesses: [],
  difficulty: '',
  addWord: () => {},
  addBotWord: () => {},
  changeDiff: () => {},
});

export { WordsContext };
