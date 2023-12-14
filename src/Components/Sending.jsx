import { firestore } from '../firebase';
import {useState} from "react";
import {collection, addDoc} from 'firebase/firestore';

const Sending = () => {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handleSubmit function called');
  
    if (message.trim() === '') {
      console.log('Empty message detected, returning.');
      return;
    }
  
    console.log('Attempting to add message to Firestore:', message);
    // const collectionRef = firestore.collection('messages');
    try {
      const docRef = await addDoc(collection(firestore, "messages"), {
        text: message,
        Date: new Date,
      });
      console.log('Message sent successfully with ID:', docRef.id);
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message:', error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Your score is ..."
      />
      <button className="btn btn-primary m-2" onClick={handleSubmit}>Send</button>
    </div>
  );
};

export default Sending;
