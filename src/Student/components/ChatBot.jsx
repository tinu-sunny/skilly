import React, { useState } from "react";
import { chatBot } from "../../services/allAPIs";
import { HiChatAlt2, HiX } from "react-icons/hi";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, TextInput } from "flowbite-react";

function ChatBot() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState("Hey! it's skilly ChatBot i can help you");
  const [openModal, setOpenModal] = useState(false);
  console.log(message);
  

  const sendMessage = async () => {
    try {
      const reqBody = {
        message: message, 
      };

      const reqHeader = {
        "Content-Type": "application/json",
      };

      const response = await chatBot(reqBody, reqHeader);

      console.log(response);

      setReply(response.data.reply); 
      setMessage(""); 

    } catch (error) {
      console.error("Chat error:", error);
      setReply("AI failed to respond");
    }
  };

  return (

    <>
      <div>
          <button
            onClick={() => setOpenModal(true)}
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600"
          >
            <HiChatAlt2 size={22} />
          </button>
      </div>
 <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>AI ChatBot🤖</ModalHeader>
        <ModalBody>
       <div className="p-10" >
  
         <p><strong>TS:</strong> {reply}</p>

     


      
    </div>
        </ModalBody>
        <ModalFooter >
             <TextInput  className="w-full"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
          <Button onClick={sendMessage}>send</Button>
        
        </ModalFooter>
      </Modal>
        

     


    </>
   
  );
}

export default ChatBot;
