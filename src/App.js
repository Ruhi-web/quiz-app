import React, { useState } from 'react'
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import { QuizContext } from './Helpers/Context';
import './App.css';

function App() {
  const [gameState, setGamestate] = useState('menu');
  const [score, setScore] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
       <h1 className="quiz-header">Quiz App</h1>
       <QuizContext.Provider value={{gameState, setGamestate, score, setScore}}>
       {gameState === "menu" && <MainMenu />}
       {gameState === "quiz" && <Quiz />}
       {gameState === "endscreen" && <EndScreen />}
       </QuizContext.Provider>
      </header>
    </div>
  );
}

export default App;
