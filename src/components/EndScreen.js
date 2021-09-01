import React, {useContext } from 'react'
import { QuizContext } from '../Helpers/Context'
import { Question } from '../Helpers/QuestionBank';


function EndScreen() {
    const {score, setScore, setGamestate} = useContext(QuizContext);
    const restartQuiz=()=>{
        setScore(0);
        setGamestate("menu")
}
    return (
        <div className="endscreen">
        <h1>
        Your score is {score}/{Question.length}
        </h1>
        <button onClick={restartQuiz} className="nextques">Restart Quiz</button>
            
        </div>
    )
}

export default EndScreen
