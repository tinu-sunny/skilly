import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Textarea,
  TextInput,
} from "flowbite-react";
import { useState } from "react";
import { Label, Radio } from "flowbite-react";
import { jobadd } from "../../services/allAPIs";
import { data } from "react-router-dom";
function AddJobModal() {
  const [openModal, setOpenModal] = useState(false);
  // state for job data collection
const [clear ,setClear]=useState({
    jobtitle: "",
    dataofupdate: "",
    lastdate: "",
    discription: "",
    role: "",
    experience: "",
    worktype:"",
    workmode:"",
    location:"",
    education:"",
     salary:"",
    companyname:""
  })
  const [jobData, setJobData] = useState({
    jobtitle: "",
    dataofupdate: "",
    lastdate: "",
    discription: "",
    role: "",
    experience: "",
    worktype:"",
    workmode:"",
    location:"",
    education:"",
    salary:"",
    companyname:""
  });

  // console.log(jobData);
  

  // for updateing date 
  const handledateupdate=(e)=>{
    // console.log(e.target.value);
    const date = new Date()
    const formattedDate = date.toISOString().split("T")[0];
    // console.log(formattedDate);
    setJobData({...jobData,dataofupdate:formattedDate,lastdate:e.target.value})
    

  }

  const handlejobadd = async () => {
    const response = await jobadd(jobData);
    // console.log(response);
    if(response.status==200){
          window.location.reload();

      alert("new job added")
      setOpenModal(false)
      setJobData(clear)
    }
    else{
      alert('errr')
    }

  };
  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Add new</Button>
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
              <TextInput type="text" onChange={(e)=>{setJobData({...jobData,jobtitle:e.target.value})}}></TextInput>
            </div>

            {/*  Department */}
            <div>
              <label
                htmlFor=""
                className="text-[#11418] font-bold dark:text-white"
              >
                Education Qualification
              </label>
              <TextInput type="text" onChange={(e)=>{setJobData({...jobData,education:e.target.value})}}></TextInput>
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
                <Button outline onClick={()=>setJobData({...jobData,worktype:"full-time"})}>Full-time</Button>
                <Button outline onClick={()=>setJobData({...jobData,worktype:"part-time"})}>Part-time</Button>
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
                  <TextInput type="date" onChange={(e)=>handledateupdate(e)}></TextInput>
                </div>
                {/* role */}

                <div className="mt-5">
                  <label
                    htmlFor=""
                    className="text-[#11418] font-bold dark:text-white"
                  >
                    Role
                  </label>
                  <TextInput type="text" onChange={(e)=>{setJobData({...jobData,role:e.target.value})}}></TextInput>
                </div>
                {/* salary */}
               <div className="mt-5">
                  <label
                    htmlFor=""
                    className="text-[#11418] font-bold dark:text-white"
                  >
                    Salary
                  </label>
                  <TextInput type="text" onChange={(e)=>{setJobData({...jobData,salary:e.target.value})}}></TextInput>
                </div>

{/* experiences */}
                <div className="mt-5">
                  <label
                    htmlFor=""
                    className="text-[#11418] font-bold dark:text-white"
                  >
                    Experience
                  </label>
                  <TextInput type="text" onChange={(e)=>{setJobData({...jobData,experience:e.target.value})}}></TextInput>
                </div>

                {/* location  */}
                <div className="mt-5">
                  <label
                    htmlFor=""
                    className="text-[#11418] font-bold dark:text-white"
                  >
                    Work location
                  </label>
                  <TextInput type="text" onChange={(e)=>{setJobData({...jobData,location:e.target.value})}}></TextInput>
                </div>
              </div>

              {/* job description */}

              <div>
                <h1 className="text-[#11418] font-bold dark:text-white">
                  Job description
                </h1>

                <Textarea onChange={(e)=>{setJobData({...jobData,discription:e.target.value})}}></Textarea>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handlejobadd}>Add</Button>
          <Button color="alternative" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default AddJobModal;
