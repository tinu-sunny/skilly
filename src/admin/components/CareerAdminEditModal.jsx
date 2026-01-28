import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Select, Textarea, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { carrerfieldwithid } from "../../services/allAPIs";

function CareerAdminEditModal(params) {
    // console.log(id);
    const {id}=params
    
    const [openModal,setOpenModal]=useState(false)
    const [preview,setPreview]=useState('')


 const  getcareerfileld =async()=>{
    const response = await carrerfieldwithid()
    console.log(response);
    
 }
 useEffect(()=>{
    getcareerfileld()
 },[])
  return (
    <>
      <div className="flex flex-wrap gap-4">
        <Button className="bg-[#0426bd]" onClick={() => setOpenModal(true)}>Edit</Button>
        
      
      </div>
      <Modal show={openModal} size={'4xl'} onClose={() => setOpenModal(false)}>
        <ModalHeader>Add New carrer Fileld</ModalHeader>
        <ModalBody>
          <div className="space-y-6 p-6">
          <div>
                <label className="dark:text-white"> Coures Name</label>
              <TextInput type="text"  onChange={(e)=>{setCourseData({...courseData,coursename:e.target.value})}}/>
          </div>
             <div>
                <label className="dark:text-white"> Category</label>
              <TextInput type="text"  onChange={(e)=>{setCourseData({...courseData,category:e.target.value})}}/>
          </div>
          <div>
            <label className="dark:text-white" htmlFor="">Avg Salary</label>
          <TextInput  onChange={(e)=>{setCourseData({...courseData,avgsalary:e.target.value})}}/>
          </div>
          <div>
            <label className="dark:text-white" htmlFor="">Description</label>
          <Textarea  onChange={(e)=>{setCourseData({...courseData,description:e.target.value})}}/>
          </div>
         <div>
            <label className="dark:text-white" htmlFor="">thumbnail</label> 
            <TextInput type="file"  />
              </div>
              {preview? <div className="flex justify-center items-center shadow-2xl">
                <img src={preview} alt="thumbnail preview" />
              </div>:""}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button >Add</Button>
          <Button color="alternative" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default CareerAdminEditModal