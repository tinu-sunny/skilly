import { Button, Textarea, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { FaRegComment, FaRegHeart } from 'react-icons/fa';
import { IoMdCloudUpload } from 'react-icons/io'
import { RiShareForwardLine } from "react-icons/ri";

function Professionalindexpage() {
      const [activeChat, setActiveChat] = useState(null);

  const profiles = [
    { id: 1, name: "John Doe", img: "https://i.pravatar.cc/100?img=1" },
    { id: 2, name: " Doe", img: "https://i.pravatar.cc/100?img=1" },
    { id: 3, name: "Emma Watson", img: "https://i.pravatar.cc/100?img=2" },
    { id: 4, name: "Alex Brown", img: "https://i.pravatar.cc/100?img=3" },
    { id: 5, name: " Brown", img: "https://i.pravatar.cc/100?img=3" }
  ];
  return (
 <>
 <div> header</div>

 <div className='flex justify-between  p-10 w-full gap-5 '>
    {/* left section  profile view */}
    <section className=' w-[50%]'>
        <div>
           <div className='flex flex-col p-5 gap-5  bg-gray-100 rounded-3xl shadow-2xl' >
                <h1 className='text-[#111418] font-bold text-start shadow-2xl'>Your profile</h1>
               <div className="w-20 h-20 rounded-full overflow-hidden ml-20 shadow-2xl" >
  <img
    src="https://mythemeshop.com/wp-content/themes/mts19/images/testimonials/Ryan-360x290.jpg"
    alt="user"
    className="w-full h-full object-cover"
  />
</div>
               <div className='text-center'> <Button  outline>LogOut ←</Button></div>
           </div>
        </div>
        </section>

{/* center section to see post */}
    <section className='w-full flex flex-col gap-10'>
        <div className='bg-gray-100 rounded-3xl shadow-xl p-5 '>
            {/* upload image for showcase */}
            <div className=''>
                <h1 className='text-[#111418] font-bold leading-tight text-xl'>New Post</h1>

                  <div className='p-5 gap-1 flex flex-col'>
                        <label className='text-[#111418] font-bold leading-tight'> What's In your mind.....</label>
        <Textarea className='' type='text'></Textarea>
                  </div>
                <div className='px-5'>
                    <label
      htmlFor="image"
      className="border-2 border-dotted p-5 h-20 text-[#111418] flex  items-center justify-center gap-2 cursor-pointer rounded-lg bg-gray-100 hover:bg-gray-300"
    >
              <IoMdCloudUpload size={24} />
              <span>Upload Image</span>
      <input
        type="file"
        id="image"
        className="hidden"
      />
    </label>


                </div>
            </div>
        </div>

        {/* posts  */}

        <div>
              <div className='bg-gray-100 shadow-xl rounded-2xl py-2'>
                {/* profile */}
               <div className='flex items-center gap-2 mb-3 p-3'>
                     <img
                    src='https://i.pravatar.cc/100?img=3'
                    className="w-10 h-10 rounded-full object-cover"
                    alt='profile'
                  />
                  {/* profile user name */}
                     <h2 className='text-[#111418] font-bold leading-tight'>Jobin</h2>
               </div>
             
               {/* caption */}
                 <p className='text-[#111418] font-medium leading-tight mb-3 p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt deleniti similique dolores, ea nulla tempore repellat placeat fugiat culpa aut officiis, labore dolorum commodi in blanditiis cumque earum laborum recusandae.</p>
              
                 {/* posted image */}
                <img src="https://i.pravatar.cc/100?img=3" alt="post"  className='w-full h-80'/>
                {/* Like  */}
                <div className='p-3 flex flex-row gap-3'>
                     <div className='flex  items-center justify-start gap-2 '> <FaRegHeart className='hover:text-2xl' />like</div>
                     <div className='flex  items-center justify-start gap-2 '><FaRegComment className='hover:text-2xl' />comments</div>
                     <div className='flex  items-center justify-start gap-2 '> <RiShareForwardLine className='hover:text-2xl' />Share</div>
                </div>
              </div>
        </div>

         <div>
              <div className='bg-gray-100 shadow-xl rounded-2xl py-2'>
                {/* profile */}
               <div className='flex items-center gap-2 mb-3 p-3'>
                     <img
                    src='https://i.pravatar.cc/100?img=3'
                    className="w-10 h-10 rounded-full object-cover"
                    alt='profile'
                  />
                  {/* profile user name */}
                     <h2 className='text-[#111418] font-bold leading-tight'>Jobin</h2>
               </div>
             
               {/* caption */}
                 <p className='text-[#111418] font-medium leading-tight mb-3 p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt deleniti similique dolores, ea nulla tempore repellat placeat fugiat culpa aut officiis, labore dolorum commodi in blanditiis cumque earum laborum recusandae.</p>
              
                 {/* posted image */}
                <img src="https://i.pravatar.cc/100?img=3" alt="post"  className='w-full h-80'/>
                {/* Like  */}
                <div className='p-3 flex flex-row gap-3'>
                     <div className='flex  items-center justify-start gap-2 '> <FaRegHeart className='hover:text-2xl' />like</div>
                     <div className='flex  items-center justify-start gap-2 '><FaRegComment className='hover:text-2xl' />comments</div>
                     <div className='flex  items-center justify-start gap-2 '> <RiShareForwardLine className='hover:text-2xl' />Share</div>
                </div>
              </div>
        </div>
    </section>




{/* mesg */}
    <section className="border-2 w-[50%] h-[500px] mx-auto rounded-xl overflow-hidden">

      {!activeChat ? (
        // Chat List
        <div>
          <h2 className="p-4 font-semibold border-b">Chats</h2>

          {profiles.map((user) => (
            <div
              key={user.id}
              onClick={() => setActiveChat(user)}
              className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-100"
            >
              <img
                src={user.img}
                className="w-12 h-12 rounded-full object-cover"
                alt={user.name}
              />
              <div>
                <h4 className="font-medium">{user.name}</h4>
                <p className="text-sm text-gray-500">Tap to chat</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
    //    Chat Screen 
        <div className="flex flex-col h-full">

          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b">
            <button
              onClick={() => setActiveChat(null)}
              className="text-blue-500 font-medium"
            >
              ←
            </button>
            <img
              src={activeChat.img}
              className="w-10 h-10 rounded-full"
            />
            <h3 className="font-semibold">{activeChat.name}</h3>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 bg-gray-50 overflow-y-auto">
            <div className="bg-white p-3 rounded-lg w-fit mb-2">
              Hi 👋
            </div>
            <div className="bg-green-500 text-white p-3 rounded-lg w-fit ml-auto">
              Hello!
            </div>
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              placeholder="Type a message"
              className="flex-1 border rounded-full px-4 py-2"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-full">
              Send
            </button>
          </div>

        </div>
      )}

    </section>
 </div>
 
 </>
  )
}

export default Professionalindexpage