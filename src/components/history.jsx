import { useContext } from 'react';
import { WordsContext } from '../resources/wordsContext';

function History() {
  const wordsCon = useContext(WordsContext);
  return (
    <div className="history">
      <div className="player">
        <p className="title">You</p>
        {wordsCon.words.length ? (
          <>
            {wordsCon.words.map((word, Windex) => {
              return (
                <p key={Windex}>
                  {word.guessedWordLetters.map((letter, Lindex) => {
                    return (
                      <span
                        key={Lindex}
                        style={
                          word.guessedWordLetters[Lindex] ===
                          word.wordLetters[Lindex]
                            ? { backgroundColor: '#25d34b' }
                            : word.wordLetters.includes(letter)
                            ? { backgroundColor: '#d89b2b' }
                            : {}
                        }
                      >
                        {letter}
                      </span>
                    );
                  })}
                </p>
              );
            })}
          </>
        ) : (
          ''
        )}
      </div>
      <div className="bot">
        <p className="title">Bot</p>
        {wordsCon.botGuesses.length ? (
          <>
            {wordsCon.botGuesses.map((guess, Windex) => {
              return (
                <p key={Windex}>
                  {guess.guessedWordLetters.map((letter, Lindex) => {
                    return (
                      <span
                        key={Lindex}
                        style={
                          guess.guessedWordLetters[Lindex] ===
                          guess.wordLetters[Lindex]
                            ? { backgroundColor: '#25d34b' }
                            : guess.wordLetters.includes(letter)
                            ? { backgroundColor: '#d89b2b' }
                            : {}
                        }
                      >
                        {letter}
                      </span>
                    );
                  })}
                </p>
              );
            })}
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default History;
