import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Select } from "flowbite-react";
import { useState } from "react";

function CareerAdminaddModal() {
    const [openModal, setOpenModal] = useState(false);


  return (
   <>
      <div className="flex flex-wrap gap-4">
        <Button className="bg-[#111418]" onClick={() => setOpenModal(true)}>Add new</Button>
        
      
      </div>
      <Modal show={openModal} size={'4xl'} onClose={() => setOpenModal(false)}>
        <ModalHeader>Small modal</ModalHeader>
        <ModalBody>
          <div className="space-y-6 p-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="alternative" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default CareerAdminaddModal