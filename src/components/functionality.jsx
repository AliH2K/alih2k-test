import { randWord, words } from '../resources/words';
import { useContext, useEffect } from 'react';
import { WordsContext } from '../resources/wordsContext';
import NextInpField from './nextInpField';

console.log(randWord);

function InpField() {
  const wordsCon = useContext(WordsContext);
  window.onload = () => {
    NextInpField();
    botWordGen();
  };

  function botWordGen() {
    let wordArray = Array.from(randWord);
    let filteredWords = [];
    const bg = wordsCon.botGuesses;
    if (wordsCon.difficulty === 'Easy') {
      if (bg.length > 0) {
        for (let w = 0; w < words.length; w++) {
          if (
            words[w].includes(
              bg[bg.length - 1].correctLetters.contains[
                bg[bg.length - 1].correctLetters.contains.length - 1
              ]
            ) ||
            words[w].includes(
              bg[bg.length - 1].correctLetters.correctPos[
                bg[bg.length - 1].correctLetters.contains.length - 1
              ]
            ) ||
            words[w].includes(wordArray[2])
          ) {
            filteredWords.push(words[w]);
          }
        }
        botInit(
          filteredWords[Math.floor(Math.random() * filteredWords.length)]
        );
      } else {
        botInit(words[Math.floor(Math.random() * words.length)]);
      }
    }

    if (wordsCon.difficulty === 'Normal') {
      for (let w = 0; w < words.length; w++) {
        if (
          words[w].includes(wordArray[0]) &&
          words[w].includes(wordArray[3])
        ) {
          filteredWords.push(words[w]);
        }
      }
      botInit(filteredWords[Math.floor(Math.random() * filteredWords.length)]);
    }

    if (wordsCon.difficulty === 'Hard') {
      for (let w = 0; w < words.length; w++) {
        if (
          words[w].includes(wordArray[1]) &&
          words[w].includes(wordArray[2]) &&
          words[w].includes(wordArray[3])
        ) {
          filteredWords.push(words[w]);
        }
      }
      botInit(filteredWords[Math.floor(Math.random() * filteredWords.length)]);
    }
  }

  function botInit(word) {
    let wordArray = Array.from(randWord);
    let botInp = word;
    let botInpLetters = Array.from(botInp);
    let correctLetters = {
      correctPos: [],
      contains: [],
    };

    for (let i = 0; i < 5; i++) {
      let lpos = wordArray.indexOf(botInpLetters[i]);
      if (lpos === -1) {
      } else if (botInpLetters[i] == wordArray[i]) {
        correctLetters.correctPos.push(botInpLetters[i]);
      } else {
        correctLetters.contains.push(botInpLetters[i]);
      }
      wordsCon.addBotWord(randWord, botInp, correctLetters);
    }
    if (botInp === randWord) {
      alert(`Game Over! The bot guessed right. The word was ${randWord}`);
      window.location.reload(false);
    }
  }

  function Init(inp) {
    let userInp = Array.from(inp);
    let userInpCheck = inp;
    let wordArray = Array.from(randWord);
    let correctLetters = {
      correctPos: [],
      contains: [],
    };

    if (userInpCheck.length < 5) {
      alert('Guessed word is too short');
    } else {
      for (let i = 0; i < 5; i++) {
        let lpos = wordArray.indexOf(userInp[i]);
        let inputDOM = document.querySelectorAll('.inp');
        if (lpos === -1) {
          inputDOM[i].style.backgroundColor = '#a0a0a0';
        } else if (userInp[i] == wordArray[i]) {
          inputDOM[i].style.backgroundColor = '#25d34b';
          correctLetters.correctPos.push(i);
        } else {
          inputDOM[i].style.backgroundColor = '#d89b2b';
          correctLetters.contains.push(i);
        }
        wordsCon.addWord(randWord, userInpCheck, correctLetters);
      }
    }
    if (userInpCheck == randWord) {
      alert('Correct! You win');
      window.location.reload(false);
    }
  }

  const submit = (e) => {
    let inpLetters = document.querySelectorAll('.inp');
    let inpWord = '';
    inpLetters.forEach((letter) => {
      let letterUp = letter.value.toUpperCase();
      inpWord += letterUp;
    });
    if (e.keyCode === 13) {
      Init(inpWord);
      botWordGen();
    }
  };
  return (
    <>
      <div id="diff">
        <button onClick={(e) => wordsCon.changeDiff('Easy')}>Easy</button>
        <button onClick={(e) => wordsCon.changeDiff('Normal')}>Normal</button>
        <button onClick={(e) => wordsCon.changeDiff('Hard')}>Hard</button>
        <h1>
          Current Difficulty: <span>{wordsCon.difficulty}</span>
        </h1>
      </div>
      <div className="main">
        <div className="inps">
          <input
            autoComplete="none"
            className="inp"
            type="text"
            maxLength={1}
          />
          <input
            autoComplete="none"
            className="inp"
            type="text"
            maxLength={1}
          />
          <input
            autoComplete="none"
            className="inp"
            type="text"
            maxLength={1}
          />
          <input
            autoComplete="none"
            className="inp"
            type="text"
            maxLength={1}
          />
          <input
            autoComplete="none"
            className="inp"
            type="text"
            maxLength={1}
            onKeyUp={submit}
          />
        </div>
      </div>
    </>
  );
}

export { InpField };
