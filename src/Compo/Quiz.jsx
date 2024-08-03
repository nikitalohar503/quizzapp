import React, { useState } from 'react'
import Quizcss from './Quiz.css'
import Questionlist from './Questionlist'

const Quiz = () => {
    const questions = [{
        question :"what is react ?",
        options : ['css','Framework','React Library','Testing tool'],
        answer : "React Library"
    },

    {
        question :"what is 2 + 2 ?",
        options: ['4','3','5','7'],
        answer :'4'
    }
]

const [currQuesIndx, setCurrQuesIndx] =useState(0);
const [currAnswer,setCurrAnswer]=useState(null);
const [score,setScore]= useState(0);
const handleClick=(option)=>{
    setCurrAnswer(option)
    if(option === questions[currQuesIndx].answer){
      setScore(score + 1)
    }
}

const handleNextQuestion=()=>{
  setCurrQuesIndx(currQuesIndx + 1);
  setCurrAnswer(null);
}
  return (
    <div>
    {currQuesIndx < questions.length ?<div>
        <Questionlist  question={questions[currQuesIndx].question}
         options={questions[currQuesIndx].options}  handleClick={handleClick}
          currAnswer={currAnswer}
        />
        <button disabled={currAnswer=== null}  className={currAnswer === null ? 'button-disable' : 'button' } onclick={handleNextQuestion}>Next Question</button>
      </div> :<div> Your Score is {score}</div>}
      
    </div>
  )
}

export default Quiz
