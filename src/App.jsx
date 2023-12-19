import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import QuizPage from './Pages/QuizPage';
import ReadyForQuiz from './Pages/ReadyForQuiz';
import Authorization from './Components/Authorization';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<ReadyForQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
