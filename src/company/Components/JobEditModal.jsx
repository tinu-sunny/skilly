import { Button, Label, Modal, ModalBody, ModalFooter, ModalHeader, Radio, Textarea, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { jobeditcompany } from '../../services/allAPIs';

function JobEditModal({id,jobdata}) {

 const [openModal, setOpenModal] = useState(false);
    const [jobData,setJobData]=useState({})
console.log(jobData);

    //         console.log("id",id);
    // console.log("data",jobdata);
    const jobview = ()=>{
console.log("inside");

    
        const job = jobdata?.find((item) => item._id === id);
//   console.log(job);  
setJobData(job)

        
        // setJobData(jobdata.find(item => item._id ===id))
    }
    useEffect(()=>{
        jobview()
    },[id,jobdata,openModal])

    const handeleeditjob = async()=>{
        const response =  await jobeditcompany(jobData)
        console.log(response);
        if(response.status==200){
          window.location.reload();
            alert("update")
            setOpenModal(false)
            setJobData(response.data.updatejob)
        }
        
    }
     
    // console.log(jobData);    
    
  return (
      <>
          <Button outline onClick={() => setOpenModal(true)}>View</Button>
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <ModalHeader>Add New Vacancy</ModalHeader>
            <ModalBody>
              <div className="space-y-6  flex  flex-col ">
                <h1 className="text-[#11418] font-bold text-xl dark:text-white">
                  Basic Role Details
                </h1>
    
                {/* job title */}
                <div>
                  <label
                    htmlFor=""
                    className="text-[#11418] font-bold dark:text-white"
                  >
                    Job Title
                  </label>
                  <TextInput type="text"
                  value={jobData.jobtitle} onChange={(e)=>{setJobData({...jobData,jobtitle:e.target.value})}}></TextInput>
                </div>
    
                {/*  Department */}
                <div>
                  <label
                    htmlFor=""
                    className="text-[#11418] font-bold dark:text-white"
                  >
                    Education Qualification
                  </label>
                  <TextInput type="text"
                  value={jobData.education} onChange={(e)=>{setJobData({...jobData,education:e.target.value})}}></TextInput>
                </div>
    
                {/* type */}
    
                <div className="">
                  <label
                    htmlFor=""
                    className="text-[#11418] font-bold dark:text-white"
                  >
                    {" "}
                    Employtment Type
                  </label>
    
                  <div className="flex gap-5 mt-5">
                    <Button className={jobData.worktype=="full-time"?"bg-blue-700 text-white":"outline"} outline   onClick={()=>setJobData({...jobData,worktype:"full-time"})}>Full-time</Button>
                    <Button className={jobData.worktype=="part-time"?"bg-blue-600 text-white":"outline"} outline  onClick={()=>setJobData({...jobData,worktype:"part-time"})}>Part-time</Button>
                  </div>
                  {/* <Button outline></Button> */}
                </div>
                {/* location & work mode */}
                <div>
                  <h1 className="text-[#11418] font-bold dark:text-white mb-5">
                    Work Mode{" "}
                  </h1>
                  {/* work mode */}
                  <div className=" mb-5 justify-center">
                    <div className="flex max-w-md flex-row  flex-wrap justify-center items-center gap-4 w-full">
                     <div className="flex items-center justify-between border-2 rounded-2xl border-gray-200 p-3 w-50 gap-2">
      <Label htmlFor="remote">Remote</Label>
      <Radio
        id="remote"
        name="workmode"
        value="remote"
        checked={jobData.workmode === "remote"}
        onChange={(e) =>
          setJobData({ ...jobData, workmode: e.target.value })
        }
      />
    </div>
    
    <div className="flex items-center justify-between border-2 rounded-2xl border-gray-200 p-3 w-50 gap-2">
      <Label htmlFor="inOffice">In-office</Label>
      <Radio
        id="inOffice"
        name="workmode"
        value="inOffice"
        checked={jobData.workmode === "inOffice"}
        onChange={(e) =>
          setJobData({ ...jobData, workmode: e.target.value })
        }
      />
    </div>
    
    <div className="flex items-center justify-between border-2 rounded-2xl border-gray-200 p-3 w-50 gap-2">
      <Label htmlFor="hybrid">Hybrid</Label>
      <Radio
        id="hybrid"
        name="workmode"
        value="hybrid"
        checked={jobData.workmode === "hybrid"}
        onChange={(e) =>
          setJobData({ ...jobData, workmode: e.target.value })
        }
      />
    </div>
    
                    </div>
                    {/* last date */}
                    <div className="mt-5">
                      <label
                        htmlFor=""
                        className="text-[#11418] font-bold dark:text-white"
                      >
                        Last Date
                      </label>
                      <TextInput
                        value={jobData.lastdate || ""} type="date" onChange={(e)=>{setJobData({...jobData,lastdate:e.target.value})}}></TextInput>
                    </div>
                    {/* role */}
    
                    <div className="mt-5">
                      <label
                        htmlFor=""
                        className="text-[#11418] font-bold dark:text-white"
                      >
                        Role
                      </label>
                      <TextInput type="text"
                      value={jobData.role} onChange={(e)=>{setJobData({...jobData,role:e.target.value})}}></TextInput>
                    </div>
                 
    
                    <div className="mt-5">
                      <label
                        htmlFor=""
                        className="text-[#11418] font-bold dark:text-white"
                      >
                        Experience
                      </label>
                      <TextInput
                      value={jobData.experience} type="text" onChange={(e)=>{setJobData({...jobData,experience:e.target.value})}}></TextInput>
                    </div>
    
                    {/* location  */}
                    <div className="mt-5">
                      <label
                        htmlFor=""
                        className="text-[#11418] font-bold dark:text-white"
                      >
                        Work location
                      </label>
                      <TextInput 
                      value={jobData.location} type="text" onChange={(e)=>{setJobData({...jobData,location:e.target.value})}}></TextInput>
                    </div>
                  </div>
    
                  {/* job description */}
    
                  <div>
                    <h1 className="text-[#11418] font-bold dark:text-white">
                      Job description
                    </h1>
    
                    <Textarea
                    value={jobData.discription} onChange={(e)=>{setJobData({...jobData,discription:e.target.value})}}></Textarea>
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button onClick={()=>{handeleeditjob()}} >Update</Button>
              <Button color="alternative" onClick={() => setOpenModal(false)}>
                Decline
              </Button>
            </ModalFooter>
          </Modal>
        </>
  )
}

export default JobEditModal