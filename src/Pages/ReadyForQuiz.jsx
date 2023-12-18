import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const ReadyForQuiz = () => {
  return (
    <div className="ready-for-quiz d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1>Ready for the Quiz?</h1>
        <Link to={"/authorization"}>
            <button className="btn btn-primary mx-1 rem">Yes</button>
        </Link>
        <Link to={"/authorization"}>
        <button className="btn btn-danger mx-1">No</button>
        </Link>
      </div>
    </div>
  );
};

export default ReadyForQuiz;
