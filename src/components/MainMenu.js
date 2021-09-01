import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Context'


const MainMenu=()=> {
    const {gameState, setGamestate} = useContext(QuizContext)
    return (
        <div className="menu">
            <button onClick={()=>setGamestate("quiz")}>Start Quiz</button>
        </div>
    )
}

export default MainMenu
