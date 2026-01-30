import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Select, Textarea, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import {  carrerfileldupdateAPI } from "../../services/allAPIs";
import { serverURL } from "../../services/serverURL";

function CareerAdminEditModal(data) {
   console.log(data);

   const {id,careerdata,setRefresh}=data
  //  console.log(careerdata);

   const [courseData,setCourseData]=useState([])
console.log(courseData);
    const [openModal,setOpenModal]=useState(false)
    const [preview,setPreview]=useState('')
    // data set to view and updatae
   useEffect(()=>{
    const sortdata = careerdata.find(item=>item._id===id)
    setCourseData(sortdata)
   },[data])

  //  image upload logic

 const handleimageupload=async(e)=>{
  console.log(e);

  const url = URL.createObjectURL(e.target.files[0])
  setPreview(url)
setCourseData({...courseData,thumbnail:e.target.files[0]})
  
 }


 const updatecareerfilds = async()=>{
  console.log('inside the edit logic');

  const reqBody = new FormData();
  for(let key in courseData){
    if(key!="thumbnail"){
      reqBody.append(key,courseData[key])
    }
    else{
      reqBody.append("thumbnail",courseData.thumbnail)
    }
  }
  const response = await carrerfileldupdateAPI(reqBody)
  console.log(response);
  if(response.status==200){
    alert("updateted")
    setRefresh(prev => !prev);
    // setCourseData(response.data.updatecareefield)
    setOpenModal(false)
  }
  
  
 }
 
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
              <TextInput type="text" value={courseData.coursename} onChange={(e)=>{setCourseData({...courseData,coursename:e.target.value})}}/>
          </div>
             <div>
                <label className="dark:text-white"> Category</label>
              <TextInput type="text" value={courseData.category}  onChange={(e)=>{setCourseData({...courseData,category:e.target.value})}}/>
          </div>
          <div>
            <label className="dark:text-white" htmlFor="">Avg Salary</label>
          <TextInput value={courseData.avgsalary}  onChange={(e)=>{setCourseData({...courseData,avgsalary:e.target.value})}}/>
          </div>
          <div>
            <label className="dark:text-white" htmlFor="">Description</label>
          <Textarea  value={courseData.description} onChange={(e)=>{setCourseData({...courseData,description:e.target.value})}}/>
          </div>
         <div>
            <label className="dark:text-white" htmlFor="">thumbnail</label> 
            <TextInput type="file" onChange={(e)=>handleimageupload(e)}/>
              </div>
              {preview? <div className="flex justify-center items-center shadow-2xl">
                <img src={preview} alt="thumbnail preview" />
              </div>: <img src={`${serverURL}/uploads/${courseData.thumbnail}`} alt="thumbnail preview" />}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={updatecareerfilds}>Update</Button>
          <Button color="alternative" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default CareerAdminEditModal