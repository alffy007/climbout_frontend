import React,{useState} from 'react'
import './chatbot.css'; 
import axios from 'axios';
import { UilTimes } from "@iconscout/react-unicons";
import { motion, AnimateSharedLayout } from "framer-motion";
function Chatbot() {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
        <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard  setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard1  setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>

     </div>
  )
}

function CompactCard1({ setExpanded }) {
  return (
    <motion.div
      className="CompactCard1"
      style={{
        background: '#FF919D',
        boxShadow: '0px 10px 20px 0px #F9D59B',
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
    Come , Let's Talk
    </motion.div>
  );
}



function ExpandedCard({ setExpanded }) {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleInput = async (event) => {
    event.preventDefault();
    setChatHistory([...chatHistory, { text: userInput, user: true }]);
    try {
      const response = await axios.post('https://your-chat-bot-api.com', { message: userInput });
      setChatHistory([...chatHistory, { text: response.data, user: false }]);
    } catch (error) {
      console.error(error);
    }
    setUserInput('');
  };

  const renderChatHistory = () => {
    return chatHistory.map((message, index) => (
      <div key={index} className={`chat-bubble ${message.user ? 'user' : 'bot'}`}>
        {message.text}
      </div>
    ));
  };

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: '#FF919D',
        boxShadow: '0px 10px 20px 0px #F9D59B'
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <div className='chatscreen'>
      <div className='send' style={{backgroundColor:"white", borderRadius:"5px", height:"30px", width:"120px",alignItems:"end",display:"flex",padding:"10px"
      }}>
        HAi
       </div>
       <div className='send' style={{backgroundColor:"white", borderRadius:"5px", height:"30px", width:"120px",alignItems:"end",display:"flex",padding:"10px", marginLeft:"120px"
      }}>
        HAi
       </div>
      </div>
       <div className="chat-bot-ui">
      <div className="chat-history" style={{backgroundColor:"white", borderRadius:"5px", height:"30px", width:"120px",marginLeft:"120px",marginTop:"20px", padding:"10px"}}>{renderChatHistory()}</div>
      <form onSubmit={handleInput}>
        <input type="text"  placeholder='Message..' value={userInput} onChange={(e) => setUserInput(e.target.value)} />
        <button className='submitbut' type="submit">Send</button>
      </form>
    </div>
     
    </motion.div>
  );

}


export default Chatbot