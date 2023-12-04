import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="text-center mb-4">
                        <h1>Welcome to the Quiz App</h1>
                    </div>
                    <div className="text-center">
                        <Link to="/quiz">
                            <button className="btn btn-primary">Start Quiz</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
