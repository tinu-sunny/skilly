import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Select, Textarea, TextInput } from "flowbite-react";
import { div } from "framer-motion/client";
import { useState } from "react";
function CourseAddModal() {

    const [openModal, setOpenModal] = useState(false);
        
        const instialdata ={
         coursename: "",
        description: "",
        category: "",
         price: "",
          thumbnail: "",
  duration: ""
        }
    const [preview ,setPreview] =useState('')
        const [courseData,setCourseData]=useState(instialdata)
    
     const handleimageupload=(e)=>{
    
    console.log(e);
    const url = URL.createObjectURL(e.target.files[0])
    console.log(url);
    setPreview(url)
    setCourseData({...courseData,thumbnail:e.target.files[0]})
    
    
     }
        console.log(courseData);
    
        const addcourse = async ()=>{
    
            const reqBody = new FormData();
    
          // reqBody.append("title",title)
    
          for (let key in courseData) {
            if (key != "thumbnail") {
              reqBody.append(key, courseData[key]);
            } else {
             
                // console.log(item)
                reqBody.append("thumbnail", courseData.thumbnail)
            
            }
          }
          
    
        //   const response = await addcourseAPI(reqBody)
        //   console.log(response);
        //   if(response.status==200){
        //     alert(response.data.message)
        //     setOpenModal(false)
        //   }
        //   else{
        //     alert(response.response.data)
        //   }
          
    
        }
        
  return (
     <>
         <div className="flex flex-wrap gap-4">
           <Button className="bg-[#111418]" onClick={() => setOpenModal(true)}>Add new</Button>
           
         
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
               <label className="dark:text-white" htmlFor="">Fees</label>
             <TextInput  onChange={(e)=>{setCourseData({...courseData,price:e.target.value})}}/>
             </div>
               <div>
               <label className="dark:text-white" htmlFor="">duration</label>
             <TextInput  onChange={(e)=>{setCourseData({...courseData,duration:e.target.value})}}/>
             </div>
             <div>
               <label className="dark:text-white" htmlFor="">Description</label>
             <Textarea  onChange={(e)=>{setCourseData({...courseData,description:e.target.value})}}/>
             </div>

            <div>
               <label className="dark:text-white" htmlFor="">thumbnail</label> 
               <TextInput type="file"  onChange={handleimageupload}/>
                 </div>
                 {preview? <div className="flex justify-center items-center shadow-2xl">
                   <img src={preview} alt="thumbnail preview" />
                 </div>:""}
             </div>
           </ModalBody>
           <ModalFooter>
             <Button onClick={addcourse}>Add</Button>
             <Button color="alternative" onClick={() => setOpenModal(false)}>
               close
             </Button>
           </ModalFooter>
         </Modal>
       </>
  )
}

export default CourseAddModal