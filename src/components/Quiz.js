import React, {useContext, useState} from 'react'
import {Question} from '../Helpers/QuestionBank';
import {QuizContext} from '../Helpers/Context';
function Quiz() {
  const {score, setScore, setGamestate} = useContext(QuizContext);
  const [currQues,
    SetCurrQues] = useState(0);
  const [optchosen,
    setOptchosen] = useState('');

  const nextQuestion = () => {
    if (optchosen === Question[currQues].answer) {
      setScore(score + 1)
    }
    SetCurrQues(currQues + 1)
  }

  const finishQuiz =()=>{
    if (optchosen === Question[currQues].answer) {
      setScore(score + 1)
    }
    setGamestate('endscreen')

  }
  return (
    <div className="quiz">

      <h1>{Question[currQues].prompt}</h1>
      <div className="options">
        <button onClick={() => {
          setOptchosen("A")
        }}>{Question[currQues].optA}</button>
        <button onClick={() => {
          setOptchosen("B")
        }}>{Question[currQues].optB}</button>
        <button onClick={() => {
          setOptchosen("C")
        }}>{Question[currQues].optC}</button>
        <button onClick={() => {
          setOptchosen("D")
        }}>{Question[currQues].optD}</button>
      </div>
      {(currQues === Question.length - 1
        ? (
          <button onClick={finishQuiz}className="nextques">Finish</button>

        )
        : (
          <button onClick={nextQuestion} className="nextques">Next Question</button>

        ))
}
    </div>
  )
}

export default Quiz
