import { Button, Modal, TextInput } from "flowbite-react"
import { useEffect, useState } from "react"
import { IoCall, IoSend } from "react-icons/io5"
import { FcVideoCall } from "react-icons/fc"
import { HiOutlineDotsVertical } from "react-icons/hi"
import { socket } from "../../services/socket";
import { activeuserAPI } from "../../services/allAPIs"
function ChatModal() {
  const [openModal, setOpenModal] = useState(false)


    const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [useremail,setUseremail]=useState('')
console.log("t",message);
console.log("s",messages);


  useEffect(() => {
    // receive messages
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  const sendMessage = async() => {
    if (!message.trim()) return;

    const  response =  await activeuserAPI()
    console.log(response);
    if(response.status==200){
        const activeuser=response.data.user
    console.log(activeuser.email);
    const user = activeuser.email
    setUseremail(activeuser.email)
 socket.emit("send_message", {
      text: message,
      time: new Date().toLocaleTimeString(),
      userId:user
    });
    setMessage("");

    }
    
    
    

   

    
  };


  return (
    <>
      <Button
        color="purple"
        className="w-32 font-semibold shadow-md"
        onClick={() => setOpenModal(true)}
      >
        Chat
      </Button>

      <Modal show={openModal} dismissible onClose={() => setOpenModal(false)}>
        <section className="border-2 border-slate-300 h-[500px] flex flex-col rounded-2xl">

          {/* Header */}
          <div className="shadow-md p-4 flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <img
                src="https://i.pravatar.cc/40"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-semibold text-sm">User Name</h4>
                <p className="text-xs text-gray-500">Last seen</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xl">
              <Button outline size="sm"><IoCall /></Button>
              <Button outline size="sm"><FcVideoCall /></Button>
              <HiOutlineDotsVertical className="cursor-pointer" />
            </div>
          </div>

          {/* Messages (scrollable) */}
          <h1  className="text-center">{new Date().toLocaleDateString()}</h1>
          {messages.length > 0 ?"":<h1 className="text-center  flex justify-center items-center h-full">start a new conversation</h1>}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto">
            {messages.map((msg,index)=>msg.userId !== useremail?(
                  <p className="w-fit bg-gray-100 shadow p-2 rounded-lg">
               {msg.text} <small>({msg.time})</small>
            </p> 
            ):<p className="w-fit ml-auto bg-amber-100 shadow p-2 rounded-lg">
              {msg.text}
            </p>
)}
         
                        
          </div>
         

          {/* Input */}
          <div className="p-3 border-t flex gap-2 items-center">
            <TextInput
              type="text"
              placeholder="Type a message..."
              className="flex-1"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button  onClick={sendMessage} color="purple">
              <IoSend />
            </Button>
          </div>

        </section>
      </Modal>
    </>
  )
}

export default ChatModal
