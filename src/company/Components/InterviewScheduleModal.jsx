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
import { HiVideoCamera, HiUser, HiRefresh } from "react-icons/hi";

function InterviewScheduleModal() {
      const [openModal, setOpenModal] = useState(false);
      const [mode, setMode] = useState("video");
    
  return (
    <>
    
     <Button outline onClick={() => setOpenModal(true)}>Schedule interview</Button>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
             <ModalHeader>Schedule Interview
                 <p className="text-[15px] font-medium text-slate-800">Set details for <span>Name</span></p>
                 </ModalHeader>
            
             <ModalBody>
               <div className="space-y-6  flex  flex-col ">
               
       {/* Mode of interview  */}
       <div>
     
        {/* MODE SELECT */}
        <div className="flex gap-4 mb-5">
          <button
            onClick={() => setMode("video")}
            className={`flex-1 flex flex-col items-center justify-center gap-2 rounded-lg border p-4 font-semibold transition ${
              mode === "video"
                ? "border-blue-500 bg-blue-50 text-blue-600"
                : "border-gray-200 text-gray-400"
            }`}
          >
            <HiVideoCamera size={24} />
            VIDEO CALL
          </button>

          <button
            onClick={() => setMode("person")}
            className={`flex-1 flex flex-col items-center justify-center gap-2 rounded-lg border p-4 font-semibold transition ${
              mode === "person"
                ? "border-blue-500 bg-blue-50 text-blue-600"
                : "border-gray-200 text-gray-400"
            }`}
          >
            <HiUser size={24} />
            IN-PERSON
          </button>
        </div>

        {/* DATE & TIME */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div>
            <label className="text-sm font-medium text-gray-600">DATE</label>
            <TextInput
              type="date"
              className=" w-full focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">TIME SLOT</label>
         <TextInput type="time"/>
          </div>
        </div>

        {/* MEETING LINK */}
        <div className="mb-3">
          <label className="text-sm font-medium text-gray-600">MEETING LINK</label>
          <div className="mt-1 flex gap-2">
            <TextInput
              type="text"
              defaultValue="https://meet.google.com/abc-defg-hij"
              className="w-full focus:ring-2 focus:ring-blue-500"
            />
         
          </div>
        </div>

       

        {/* NOTES */}
        <div>
          <label className="text-sm font-medium text-gray-600">INTERNAL NOTES</label>
          <Textarea
            rows={3}
            placeholder="Candidate requested afternoon slots only. Focus on portfolio review"
            className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

     
      </div>
    </div>
     
             </ModalBody>
             <ModalFooter>
               <Button>Send Invitation</Button>
               <Button color="alternative" onClick={() => setOpenModal(false)}>
                 Decline
               </Button>
             </ModalFooter>
           </Modal>
    </>
  )
}

export default InterviewScheduleModal