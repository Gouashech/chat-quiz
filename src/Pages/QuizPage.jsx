import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which programming language is known as the 'language of the web'?",
        options: ["Java", "Python", "JavaScript", "C++"],
        correctAnswer: "JavaScript"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Mars", "Jupiter", "Earth", "Saturn"],
        correctAnswer: "Jupiter"
    }
    // Add more questions as needed
];

const QuizPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResultModal, setShowResultModal] = useState(false);

    const selectOption = (selectedIndex) => {
        const currentQuizData = quizData[currentQuestion];
        const selectedOption = currentQuizData.options[selectedIndex];

        if (selectedOption === currentQuizData.correctAnswer) {
            setScore(score + 1);
        }

        setCurrentQuestion(currentQuestion + 1);

        if (currentQuestion === quizData.length - 1) {
            setShowResultModal(true);
        }
    };

    const closeModal = () => {
        setShowResultModal(false);
        setCurrentQuestion(0);
        setScore(0);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    {currentQuestion < quizData.length && (
                        <div>
                            <h1>{quizData[currentQuestion].question}</h1>
                            <div>
                                {quizData[currentQuestion].options.map((option, index) => (
                                    <button
                                        key={index}
                                        className="btn btn-outline-primary m-2"
                                        onClick={() => selectOption(index)}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Result Modal */}
            {showResultModal && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Quiz Result</h5>
                                <button type="button" className="close" onClick={closeModal}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Your score: {score} out of {quizData.length}</p>
                            </div>
                            <div className="modal-footer">
                                <Link to="/">
                                    <button type="button" className="btn btn-primary" onClick={closeModal}>
                                        Back to Home
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuizPage;
