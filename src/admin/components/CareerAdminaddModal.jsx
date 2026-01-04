import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Select, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";

function CareerAdminaddModal() {
    const [openModal, setOpenModal] = useState(false);


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
              <TextInput type="text"/>
          </div>
          <div>
            <label className="dark:text-white" htmlFor="">Description</label>
          <Textarea/>
          </div>
         <div>
            <label className="dark:text-white" htmlFor="">thumbnail</label> 
            <TextInput type="file"/>
              </div>

          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setOpenModal(false)}>Add</Button>
          <Button color="alternative" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default CareerAdminaddModal