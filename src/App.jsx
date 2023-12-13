import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import QuizPage from './Pages/QuizPage';
// import Sending from './Components/Sending';
import Authorization from './Components/Authorization';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/quiz" element={<QuizPage />} />
        {/* <Route path="/send" element={<Sending />} /> */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
