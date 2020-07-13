import React, { Component } from "react";
import "./Form.css";
import {useSelector} from 'react-redux'

const questionsArray = [
  {
    questionInput: "What year was the two dollar bill last printed in the United States?",
    answerInput: "2003",
  },
];

class Form extends Component {
  constructor() {
    super();
    this.state = {
      questions: questionsArray,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { questions } = this.state,
      questionInput = this.refs.questionInput.value,
      answerInput = this.refs.answerInput.value;
    this.setState(
      {
        questions: [
          ...questions,
          {
            questionInput,
            answerInput,
          },
        ],
      },
      () => {
        this.refs.questionInput.value = "";
        this.refs.answerInput.value = "";
        console.log("STATE",this.state)
      }
    );
  }

  render() {
    const { questions } = this.state;
    console.log("message", this.state.questions);
    return (
      <div>
        <h2>Add Questions</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            className="formC"
            type="text"
            ref="questionInput"
            placeholder="Question"
          />
          <input
            className="formC"
            type="text"
            ref="answerInput"
            placeholder="Answer"
          />
          <button className="formC" type="submit">
            Submit
          </button>
        </form>
        <h2>Existing Questions:</h2>
        <ul>
          {questions.map((question) => (
            <div className="questionContainer">
              <header>
                <h2>{this.state.questions.length}.</h2>
              </header>
              <li>{`Question: ${question.questionInput}`}</li>
              <li>{`Answer: ${question.answerInput}`}</li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Form;
