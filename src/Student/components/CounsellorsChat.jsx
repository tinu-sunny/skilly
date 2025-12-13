import { Button } from 'flowbite-react'
import React from 'react'

function CounsellorsChat() {
  return (
<>
{/* MEssager */}

<section>
  
    <div className='flex w-full'>
          {/* rec-contact */}
 <div className='bg-white border-1 shadow-2xl w-[40%] min-h-[100vh]'>

    <div  className='text-center h-10 border-b-2 '>
        <h1 className='text-[#111418] font-bold text-3xl'>Messenger</h1>
    </div>
{/* sigle contact */}
         <div>
               <div>
                    <h1>Name</h1>
                    <p>llast message display</p>
               </div>
               <div>
                count
               </div>
         </div>

          
          
 </div>

 {/* Message */}

<div className='w-[60%] bg-white border-1 shadow-2xl  min-h-[100vh]'>

    <div className=''>
        {/* header  */}
        <div>
            <h1>heading</h1>
        </div>
    </div>
             
</div>
    </div>
</section>

</>
  )
}

export default CounsellorsChat