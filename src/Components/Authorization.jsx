import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUpWithEmailAndPassword, signInWithEmailAndPassword, auth } from '../firebase'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const AuthComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        
        navigate('/');
      }
    });

    
    return () => unsubscribe();
  }, [navigate]);

  const handleSignUp = async () => {
    try {
      await signUpWithEmailAndPassword(email, password);
      
    } catch (error) {
      console.log(error)
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(email, password);
      
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Authentication</h1>
      <form>
        <div className="form-group row">
          <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10 mb-3 rem">
            <input type="email" className="form-control" id="inputEmail" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10 mb-3 rem">
            <input type="password" className="form-control" id="inputPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2 p-3">
            <button type="button" className="btn btn-primary mx-1 rem" onClick={handleSignUp}>Sign Up</button>
            <button type="button" className="btn btn-secondary ml-2" onClick={handleSignIn}>Sign In</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthComponent;
