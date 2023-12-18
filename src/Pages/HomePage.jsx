import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <div className="home-page d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <div className="">
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
