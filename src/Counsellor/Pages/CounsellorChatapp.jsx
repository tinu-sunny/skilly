import React, { useState } from "react";
import { chatBot } from "../../services/allAPIs";
import { HiChatAlt2 } from "react-icons/hi";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  TextInput
} from "flowbite-react";
function CounsellorChatapp() {
     const [message, setMessage] = useState("");
      const [messages, setMessages] = useState([
        { text: "Hello! How can I assist you today?", user: "bot" }
      ]);
      const [openModal, setOpenModal] = useState(false);
      const [isTyping  ,setIsTyping]=useState()
    
      const sendMessage = async () => {
        if (!message.trim()) return;
        
    
        // add user message
        setMessages(prev => [...prev, { text: message, user: "user" }]);
         setMessage("");
         setIsTyping(true);
    
        try {
          const response = await chatBot(
            { message },
            { "Content-Type": "application/json" }
          );
    
          // add bot reply
          setMessages(prev => [
            ...prev,
            { text: response.data.reply, user: "bot" }
          ]);
        } catch (error) {
          setMessages(prev => [
            ...prev,
            { text: "AI failed to respond", user: "bot" }
          ]);
        }
    setIsTyping(false); 
        setMessage("");
      };
  return (
     <>
         {/* Floating Button */}
         <button
           onClick={() => setOpenModal(true)}
           className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600"
         >
           <HiChatAlt2 size={22} />
         </button>
   
         {/* Modal */}
         <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
           <ModalHeader>AI ChatBot 🤖</ModalHeader>
   
           <ModalBody>
             <div className="flex flex-col gap-3 max-h-96 overflow-y-auto">
               {messages.map((msg, index) => (
                 <div
                   key={index}
                   className={`px-3 py-2 rounded-lg max-w-xs ${
                     msg.user === "user"
                       ? "bg-blue-500 text-white self-end rounded-br-none"
                       : "bg-gray-200 self-start rounded-bl-none"
                   }`}
                 >
                   {msg.text}
                 </div>
               ))}
             </div>
             {isTyping && (
     <div className="bg-gray-200 px-3 py-2 rounded-lg max-w-xs self-start">
       thinking...
     </div>
   )}
           </ModalBody>
   
           <ModalFooter>
             <TextInput
               className="w-full"
               value={message}
               onChange={e => setMessage(e.target.value)}
               placeholder="Type your message"
             />
             <Button onClick={sendMessage}>Send</Button>
           </ModalFooter>
         </Modal>
       </>
  )
}

export default CounsellorChatapp