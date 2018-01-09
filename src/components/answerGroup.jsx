import React from 'react';

const AnswerGroup = ({answerOptions, onSelect}) => {
  return (
    <React.Fragment>
      <input type='radio' name='answers' value='1' id='option1' onClick={onSelect}/>
      <label htmlFor='option1'>{answerOptions[0]}</label>
      <input type='radio' name='answers' value='2' id='option2' onClick={onSelect}/>
      <label htmlFor='option2'>{answerOptions[1]}</label>
      <input type='radio' name='answers' value='3' id='option3' onClick={onSelect}/>
      <label htmlFor='option3'>{answerOptions[2]}</label>
      <input type='radio' name='answers' value='4' id='option4' onClick={onSelect}/>
      <label htmlFor='option4'>{answerOptions[3]}</label>
    </React.Fragment>
  );
}

export default AnswerGroup;