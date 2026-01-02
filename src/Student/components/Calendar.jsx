import { Button, TextInput } from "flowbite-react";
import { div } from "framer-motion/client";
import React, { useState } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";

function Calendar() {
   const [value, setValue] = useState(new Date());
   console.log(value);
   const [sessionType,setSessionType]=useState('')
 
   const[bookingTime,setbookingTime]=useState()
   console.log(sessionType);

    const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };
   
  return (
     
   <>




 <div>
      
      {/* Step Indicators */}
   <div  style={{ width: "400px", margin: "40px auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px"
            }}
          >
            {[1,2 ,3 ].map((item) => (
              <div
                key={item}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: step >= item ? "#2563eb" : "#ccc",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {item}
              </div>
            ))}
          </div>
   </div>

      {/* Step Content */}
      {step === 1 && <div>
        <div className="flex justify-evenly flex-wrap gap-5 items-top">
            {/* type */}
                                   <div className="flex flex-col gap-5 items-start justify-center">
                                    <div className="flex flex-col gap-5 mb-5">
                                        <h1 className="text-[#111418] font-bold leading-tight text-2xl">Counseler : <span>name</span></h1>
                                        <h1 className="text-[#111418] font-bold leading-tight text-2xl">Specialization : </h1>
                                    </div>
                                            <div>
                                                <h1 className='text-2xl font-bold leading-tight'>Select Session Type</h1>
                                                <div className='flex gap-5 mt-5'>
                                                    <Button onClick={()=>setSessionType('online')} className={sessionType==="online"?"bg-green-600 hover:bg-green-600":""}>Online</Button>
                                                    <Button onClick={()=>setSessionType('offline')} className={sessionType==="offline"?"bg-green-600 hover:bg-green-600":""}>Offline</Button>
                                                </div>
                                            </div>
                                            <div>
                                                <h1 className='text-2xl font-bold leading-tight'>Avalablie time </h1>
                                                <div className='flex gap-5 mt-5'>
                                                  <Button onClick={()=>setbookingTime('10am')} className={bookingTime==="10am"?"bg-green-600 hover:bg-green-600":""}>10Am</Button>
                                                    <Button onClick={()=>setbookingTime('12pm')} className={bookingTime==="12pm"?"bg-green-600 hover:bg-green-600":""}>12pm</Button>
                                                    <Button onClick={()=>setbookingTime('3:30pm')} className={bookingTime==="3:30pm"?"bg-green-600 hover:bg-green-600":""}>3:30pm</Button>
                                                </div>
                                            </div>
                                   </div>
                                    {/* date selection */}
                 <div >
                  <ReactCalendar onChange={setValue} value={value} />
                </div>
        </div>
        
</div>}
      {step === 2 && <div>
    {/* summary */}
    <div className="flex items-center justify-center">
        <div className="border-2 border-gray-300 w-[40%] p-10 flex flex-col shadow-2xl ">
            <h1 className="text-center mb-3 text-xl font-bold">Session Summary</h1>
            <hr />
            <div className="flex flex-col gap-2 mt-4 items-start justify-center p-4 leading-tight">
                <p className="text-[#111418] font-bold text-xl">counsellor : <span> Dr. name</span></p>
                <p className="text-[#111418] font-bold text-xl">Session Type : <span>{sessionType}</span></p>
                <p className="text-[#111418] font-bold text-xl">Date : <span>{`${value.getDate()} -${value.getMonth()+1}-${value.getFullYear()}`}</span></p>
                <p className="text-[#111418] font-bold text-xl">Time : <span>{bookingTime}</span></p>
            </div>
            {/* <p>Date <span>{{`${value.getDate}-${value.getMonth}-${value.getFullYear}`}}</span></p> */}
        </div>

    </div>
   


    </div>}
      {step === 3 && <h3> Booking Confirm</h3>}

      {/* Navigation */}
      <div style={{ marginTop: "20px" }} className="flex justify-end items-center lg:mr-50 md:mr-50">
        {step > 1 && <Button onClick={prevStep}>Back</Button>}
         {step < 2 && (
          <Button onClick={nextStep} style={{ marginLeft: "10px" }}>
         next
          </Button>
        )}
        {step === 2 && (
          <Button onClick={nextStep} style={{ marginLeft: "10px" }}>
            Pay And Book
          </Button>
        )}
          {step === 3 && (
          <Button onClick={nextStep} style={{ marginLeft: "10px" }}>
            Pay
          </Button>
        )}
      </div>
    </div>


















   
   </>
  )
}

export default Calendar