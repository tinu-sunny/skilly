import React from 'react'
import Adminheader from '../components/Adminheader'

function AdminLandingpage() {
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 '>
    {/* header */}
          <div >  <Adminheader/>  </div>

              {/*admin dashbord content  */}
        <div>
            AdminLandingpage
            
            </div>
     
      </div>

    
    </>
   
  )
}

export default AdminLandingpage