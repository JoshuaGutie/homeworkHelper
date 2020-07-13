import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core';
import "./Form.css";

const testGame = [
    {
        questionInput: "What year was the two dollar bill last printed in the United States?",
        answerInput: "2003",
      },
    ]

const Test = (props) => {
    return (

        <div>
<ul>
          {testGame.map((question) => (
            <div className="questionContainerT">
              <li>{`Question: ${question.questionInput}`}</li>
            </div>
          ))}
        </ul>
        <div className =" team1"><h1>Team 1</h1></div>
            <div className =" team2"><h1>Team 2</h1></div>

        </div>
        
    )
    
}

export default Test