import React, { useState } from "react";
import CounsellorSidebar from "../Components/CounsellorSidebar";
import { Button, TextInput } from "flowbite-react";
import AppFooter from "../../components/AppFooter";



function CounsellorChatApp() {
     const students = [
    {
      id: 1,
      name: "Alice Smith",
      lastMessage: "I'm feeling a bit anxious...",
      time: "10:30 AM",
      grade: "11th Grade"
    },
    {
      id: 2,
      name: "John Doe",
      lastMessage: "Thanks for the advice!",
      time: "Yesterday",
      grade: "12th Grade"
    },
    {
      id: 3,
      name: "Emily Chen",
      lastMessage: "I've submitted the form",
      time: "Tue",
      grade: "10th Grade"
    }
  ];

  const [selectedStudent, setSelectedStudent] = useState(students[0]);
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      text: "Hi Ms. Johnson, I'm feeling anxious about finals.",
      sender: "student",
      time: "10:28 AM"
    },
    {
      text: "It's completely normal. Let's talk about it 🙂",
      sender: "counsellor",
      time: "10:30 AM"
    }
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages(prev => [
      ...prev,
      { text: message, sender: "counsellor", time: "Now" }
    ]);

    setMessage("");
  };

  return (

    <>
      <div className="flex sm:flex-row flex-col  dark:bg-black">
        {/* header */}
        <div className="w-80">
          {" "}
          <CounsellorSidebar />
        </div>

        {/* dashbord content  */}
        <div className="w-full  ">
        


 <div className="h-screen flex bg-gray-100 ">

      {/* LEFT SIDEBAR */}
      <div
        className={`w-full md:w-1/4 bg-white border-r dark:bg-black
        ${showChat ? "hidden md:block" : "block"}`}
      >
        <div className="p-4">
          <TextInput
            type="text"
            placeholder="Search students..."
            className="w-full "
          />
        </div>

        <div className="flex gap-2 px-4 mb-2">
          <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm dark:text-white">
            Active
          </button>
          <button className="px-3 py-1 border rounded-md text-sm dark:text-white">
            Archived
          </button>
        </div>

        {students.map(student => (
          <div
            key={student.id}
            onClick={() => {
              setSelectedStudent(student);
              setShowChat(true);
            }}
            className={`flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-blue-300 ${
              selectedStudent.id === student.id && "bg-blue-500"
            }`}
          >
            <div>
              <p className="font-medium dark:text-white">{student.name}</p>
              <p className="text-xs text-gray-500 dark:text-white">{student.lastMessage}</p>
            </div>
            <span className="text-xs text-blue-500 dark:text-white">{student.time}</span>
          </div>
        ))}
      </div>

      {/* RIGHT CHAT PANEL */}
      <div
        className={`flex-1 flex flex-col
        ${showChat ? "block" : "hidden md:flex"}`}
      >

        {/* HEADER */}
        <div className="bg-white border-b px-6 py-4 flex justify-between items-center dark:bg-black">
          <div className="flex items-center gap-3">
            {/* Back Button - Mobile only */}
            <Button
              onClick={() => setShowChat(false)}
              className="md:hidden text-black-500 font-bold text-xl "
            >
              ← 
            </Button>

            <div>
              <h2 className="font-semibold dark:text-white">{selectedStudent.name}</h2>
              <p className="text-sm text-gray-500 dark:text-white">
                {selectedStudent.grade} • Session in Progress
              </p>
            </div>
          </div>

          <button className="border px-3 py-1 rounded-md text-sm dark:text-white">
            View Profile
          </button>
        </div>

        {/* MESSAGES */}
        <div className="flex-1 p-6 overflow-y-auto bg-gray-50 dark:bg-black">
          <div className="text-center text-xs text-gray-400 mb-4 dark:text-white">
            Today
          </div>

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 max-w-[70%] ${
                msg.sender === "counsellor"
                  ? "ml-auto text-right"
                  : "mr-auto"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg inline-block ${
                  msg.sender === "counsellor"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-white border rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
              <div className="text-xs text-gray-400 mt-1">
                {msg.time}
              </div>
            </div>
          ))}

          <div className="text-xs text-gray-400 mt-2">
            Alice is typing...
          </div>
        </div>

        {/* INPUT */}
        <div className="p-4 bg-white border-t flex gap-2 dark:bg-black">
          <TextInput
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendMessage()}
            placeholder="Type a message..."
            className="flex-1"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-4 rounded-lg"
          >
            ➤
          </button>
        </div>

      </div>
    </div>


        </div>
      </div>
      {/* <div>
        <AppFooter/>
      </div> */}
    </>
    
  );
}

export default CounsellorChatApp;
