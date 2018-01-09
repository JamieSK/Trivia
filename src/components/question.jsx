import React from 'react';
import AnswerGroup from './answerGroup';

const Question = ({question, onAnswer}) => {
  if (!question) return null;

  const onSelect = (event) => {
    event.target.checked = false;
    onAnswer(parseInt(event.target.value, 10) === question.answers);
  }
  const answerOptions = [question.option1, question.option2, question.option3, question.option4];
  return (
    <div>
      <h3>{question.question}</h3>
      <AnswerGroup answerOptions={answerOptions} onSelect={onSelect}/>
    </div>
  )
}

export default Question;