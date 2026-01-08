import { Button, Textarea, TextInput } from 'flowbite-react';
import { Drawer, DrawerHeader, DrawerItems } from "flowbite-react";
import { useEffect, useState } from "react";
import { FaEdit } from 'react-icons/fa';

function ProfileEditModal() {
     const [isOpen, setIsOpen] = useState(false);
      
    
      const handleClose = () => setIsOpen(false);
    
       
  return (
    <>

      <p  onClick={() => setIsOpen(true)} ><FaEdit /></p>
      {/* off canvac */}
      <Drawer open={isOpen} onClose={handleClose}>
        <DrawerHeader title="Edit" />
        <DrawerItems>
          <div>
            <img src='https://flowbite.com/docs/images/people/profile-picture-5.jpg' alt="" className="w-40 h-40 rounded-full object-cover shadow-md m-10" />
            <p style={{ marginTop: '-80px', marginLeft: '150px' }}><FaEdit/></p>
          </div>
          {/* details  */}
          <div className='mt-8'>
            <TextInput className='mb-4' placeholder='Name' ></TextInput>
            <TextInput className='mb-4' placeholder='Password'></TextInput>
            <TextInput className='mb-4' placeholder='Password'></TextInput>
            <Textarea></Textarea>
          </div>
          {/* Form Buttons */}
          <div className="flex justify-end space-x-3 pt-2 mt-5">
            <Button type="reset" className="bg-orange-400 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-200">
              Reset
            </Button>
            <Button type="submit" className="bg-green-400 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-200">
              Update
            </Button>
          </div>
        </DrawerItems>
      </Drawer>
    </>
  )
}

export default ProfileEditModal