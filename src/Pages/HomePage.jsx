import React from 'react';
import  {getQuestionsFromFirebase} from '../firebase';


const startQuiz = async () => {
        
    const questions = await getQuestionsFromFirebase();
    
  };

const showQuizResults = (results) => {
    
  };

const Home = () => {

    

  return (
    <div>
      <h1>Домашня сторінка</h1>
      {}
      <button onClick={() => startQuiz()}>Перейти до квізу</button>
    </div>
  );
};

export default Home;