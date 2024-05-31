/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import questions from '../resources/quizQuestion.json';

export default class Quiz extends Component {
    constructor() {
        super();
        this.state = {
            currentIndex: 0,
            score: 0,
            incorrect: 0,
        };
    }

    handlePrev = () => {
        const { currentIndex } = this.state;
        const lastIndex = questions.length - 1;
        const newIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;

        this.setState({ currentIndex: newIndex });
    };

    handleNext = () => {
        const { currentIndex } = this.state;
        const lastIndex = questions.length - 1;
        const newIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;

        this.setState({ currentIndex: newIndex });
    };

    handleQuit = () => {
        if (window.confirm('Do you want to quit?')) {
            this.props.history.push('/');
        }
    }

    handleOptionClick = (selectedOption) => {
        const { currentIndex, score, incorrect } = this.state;
        const currentQuestion = questions[currentIndex];

        if (selectedOption === currentQuestion.answer) {
            alert('Correct Answer!');
            this.setState({ score: score + 1 });
            localStorage.setItem("score", score + 1);
        } else {
            alert('Wrong Answer!');
            this.setState({ incorrect: incorrect + 1 });
            localStorage.setItem("incorrect", incorrect + 1);
        }
    }
    
    handleFinish = () => {
        this.props.history.push(`/result?score=${this.state.score}`);
    }

    render() {
        const { currentIndex } = this.state;
        const currentQuestion = questions[currentIndex];

        return (
            <div className='quiz'>
                <div className='questionContainer'>
                    <h1 className='questionTitle'>Question</h1>
                    <h3 className='questionNo'>{currentIndex + 1} of {questions.length}</h3>
                    <h2 className='question'>{currentQuestion.question}</h2>
                    <div className='options'>
                        <div className='option' onClick={() => this.handleOptionClick(currentQuestion.optionA)}>{currentQuestion.optionA}</div>
                        <div className='option' onClick={() => this.handleOptionClick(currentQuestion.optionB)}>{currentQuestion.optionB}</div>
                        <div className='option' onClick={() => this.handleOptionClick(currentQuestion.optionC)}>{currentQuestion.optionC}</div>
                        <div className='option' onClick={() => this.handleOptionClick(currentQuestion.optionD)}>{currentQuestion.optionD}</div>
                    </div>
                    <div className='buttons'>
                        <button className='previous' onClick={this.handlePrev}>Previous</button>
                        <button className='next' onClick={this.handleNext}>Next</button>
                        <button className='quit' onClick={this.handleQuit}>Quit</button>
                        <Link to={`/result?score=${this.state.score}`}>
                            <button className='finish'>Finish</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
