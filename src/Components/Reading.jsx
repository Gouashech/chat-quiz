import { collection, getDocs } from "firebase/firestore";
import { firestore} from '../firebase';
import { useState, useEffect } from 'react';


const Reading = () => {
    const [messages, setMessages] = useState([]);
    
        const fetchPost = async () => {
        
            await getDocs(collection(firestore, "messages"))
                .then((querySnapshot)=>{               
                    const newData = querySnapshot.docs
                            .map((doc) => ({...doc.data(), id:doc.id }));
                    setMessages(newData);                
                    console.log(messages, newData);
                })
        
        }
    
        useEffect(()=>{
            fetchPost();
        }, [])

        return (
            <div className="Reading">
                {
                    messages?.map((message, i) =>(
                        <p key={i}>
                            {message.message}
                        </p>
                    ))
                }
            </div>
        );
};



export default Reading;