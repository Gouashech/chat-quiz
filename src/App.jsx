import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import HomePage from './Pages/HomePage';
import QuizPage from './Pages/QuizPage';
import './App.css'

function App() {
  
    return (
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/quiz" component={QuizPage} />
          </Switch>
        </Router>
      );
  
}

export default App;
