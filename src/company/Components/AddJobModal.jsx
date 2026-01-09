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
function AddJobModal() {
  const [openModal, setOpenModal] = useState(false);
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
              <TextInput type="text"></TextInput>
            </div>

            {/*  Department */}
            <div>
              <label
                htmlFor=""
                className="text-[#11418] font-bold dark:text-white"
              >
                Education Qualification
              </label>
              <TextInput type="text"></TextInput>
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
                <Button outline>Full-time</Button>
                <Button outline>Part-time</Button>
              </div>
              {/* <Button outline></Button> */}
            </div>
            {/* location & work mode */}
            <div>
              <h1 className="text-[#11418] font-bold dark:text-white mb-5">
                Location & Work Mode{" "}
              </h1>
              {/* work mode */}
              <div className=" mb-5 justify-center">
                <div className="flex max-w-md flex-row  flex-wrap justify-center items-center gap-4 w-full">
                  <div className="flex items-center justify-between border-2 rounded-2xl border-gray-200 p-3 w-50 gap-2">
                    <Label htmlFor="remote">Remote</Label>
                    <Radio
                      id="remote"
                      name="remote"
                      value="remote"
                      defaultChecked
                    />
                  </div>
                  <div className="flex items-center justify-between border-2 rounded-2xl border-gray-200 p-3 w-50 gap-2">
                    <Label htmlFor="inOffice">In-office</Label>
                    <Radio id="inOffice" name="inOffice" value="inOffice" />
                  </div>
                  <div className="flex items-center justify-between border-2 rounded-2xl border-gray-200 p-3 w-50 gap-2">
                    <Label htmlFor="hybrid">Hybrid</Label>
                    <Radio id="hybrid" name="hybrid" value="hybrid" />
                  </div>
                </div>

                {/* location  */}
                <div className="mt-5">
                  <label
                    htmlFor=""
                    className="text-[#11418] font-bold dark:text-white"
                  >
                    Work location
                  </label>
                  <TextInput type="text"></TextInput>
                </div>
              </div>

              {/* job description */}

              <div>
                <h1 className="text-[#11418] font-bold dark:text-white">
                  Job description
                </h1>

                <Textarea></Textarea>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button>Add</Button>
          <Button color="alternative" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default AddJobModal;
