import React from 'react';
import Score from './score';
import Question from './question';

class QuestionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      correctAnswers: 0,
      currentQuestion: 0
    }
    this.handleAnswer = this.handleAnswer.bind(this);
  }

  componentDidMount() {
    const url = 'https://qriusity.com/v1/questions?page=3&limit=20';
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', () => {
      if (request.status !== 200) return;

      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({questions: data});
    });
    request.send();
  }

  handleAnswer(isCorrect) {
    if (isCorrect) {
      this.setState(prevState => {
        return {correctAnswers: prevState.correctAnswers + 1}
      });
    }

    this.setState(prevState => {
      return {currentQuestion: prevState.currentQuestion + 1}
    });

  }

  render() {
    return (
      <React.Fragment>
        <Score
          correct={this.state.correctAnswers}
          questions={this.state.questions.length}
        />
        <Question
          question={this.state.questions[this.state.currentQuestion]}
          onAnswer={this.handleAnswer}
        />
      </React.Fragment>
    )
  }
}

export default QuestionContainer;