import Body from './components/body';
import './styles/body.css';
import { WordsProvider } from './components/wordsProvider';

function App() {
  return (
    <WordsProvider>
      <Body />
    </WordsProvider>
  );
}

export default App;
