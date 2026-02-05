import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Select, Textarea, TextInput } from "flowbite-react";
import { div } from "framer-motion/client";
import { useState } from "react";
import { workshopaddinstitution } from "../../services/allAPIs";
function WorkShopModal() {
     const [openModal, setOpenModal] = useState(false);
            
            const instialdata ={
             
             title:"",
            description: "",
            category: "",
             date: "",
              location: "",
      mode: "",
      registrationlink:"",
      poster:"",
      createdDate:""
            }
        const [preview ,setPreview] =useState('')
            const [workshopData,setWorkshopData]=useState(instialdata)
        
         const handleimageupload=(e)=>{
        
        console.log(e);
        const url = URL.createObjectURL(e.target.files[0])
        console.log(url);
        setPreview(url)
        const currntdate = new Date().toLocaleDateString()

        setWorkshopData({...workshopData,poster:e.target.files[0],createdDate:currntdate})
        console.log(currntdate);
        
        // setCourseData({...courseData,thumbnail:e.target.files[0]})
        
        
         }
            console.log(workshopData);
        
            const addworkshop = async ()=>{
        
                const reqBody = new FormData();
        
          
        
              for (let key in workshopData) {
                if (key != "poster") {
                  reqBody.append(key, workshopData[key]);
                } else {
                 
            //         // console.log(item)
                    reqBody.append("poster", workshopData.poster)
                
                }
              }
              
              console.log(reqBody);
              // data back end sending logic


              const response =  await workshopaddinstitution(reqBody)
              console.log(response);
              if(response.status==200){
                alert('worshop add ')
                setOpenModal(false)
                setWorkshopData(instialdata)
              }
              

        
        
            }

  return (
    <>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#111418]" onClick={() => setOpenModal(true)}>Add new</Button>
              
            
            </div>
            <Modal show={openModal} size={'4xl'} onClose={() => setOpenModal(false)}>
              <ModalHeader>Add Workshops</ModalHeader>
              <ModalBody>
                <div className="space-y-6 p-6">
                <div>
                      <label className="dark:text-white">Title</label>
                    <TextInput type="text"  onChange={(e)=>{setWorkshopData({...workshopData,title:e.target.value})}}/>
                </div>
                   <div>
                      <label className="dark:text-white"> Date</label>
                    <TextInput type="date"  onChange={(e)=>{setWorkshopData({...workshopData,date:e.target.value})}}/>
                </div>
                <div>
                  <label className="dark:text-white" htmlFor="">Location/Venue</label>
                <TextInput  onChange={(e)=>{setWorkshopData({...workshopData,location:e.target.value})}}/>
                </div>
                  <div>
                  <label className="dark:text-white" htmlFor="">Regiistration Link</label>
                <TextInput  onChange={(e)=>{setWorkshopData({...workshopData,registrationlink:e.target.value})}}/>
                </div>

                  <div>
                  <label className="dark:text-white" htmlFor="">Category</label>
                <TextInput  onChange={(e)=>{setWorkshopData({...workshopData,category:e.target.value})}}/>
                </div>
                  <div>
                  <label className="dark:text-white" htmlFor="">Mode</label>
                <TextInput  onChange={(e)=>{setWorkshopData({...workshopData,mode:e.target.value})}}/>
                </div>
                <div>
                  <label className="dark:text-white" htmlFor="">Description</label>
                <Textarea  onChange={(e)=>{setWorkshopData({...workshopData,description:e.target.value})}}/>
                </div>
   
               <div>
                  <label className="dark:text-white" htmlFor="">Poster</label> 
                  <TextInput type="file"  onChange={(e)=>{handleimageupload(e)}}/>
                    </div>
                    {preview? <div className="flex justify-center items-center shadow-2xl">
                      <img src={preview} alt="thumbnail preview" />
                    </div>:""}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button onClick={()=>{addworkshop()}}>Add</Button>
                <Button color="alternative" onClick={() => setOpenModal(false)}>
                  close
                </Button>
              </ModalFooter>
            </Modal>
          </>
  )
}

export default WorkShopModal