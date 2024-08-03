import React from 'react'

const Questionlist = ({question,options,handleClick,currAnswer}) => {
  return (
    <div>
      <h2>{question}</h2>

      <ul>
        {options.map((option,index)=>(
            <li key={index} onClick={()=>handleClick(option)} className={currAnswer === option ? 'selected' : ''}>{option}</li>
        ))}
      </ul>
    </div>
  )
}

export default Questionlist
