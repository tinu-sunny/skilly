import React from "react";
import CompanySidebar from "../Components/CompanySidebar";



function CompayDashboard() {
  return (
       <>
      <div className="flex sm:flex-row flex-col  ">
        {/* header */}
        <div className="w-80">
          {" "}
          <CompanySidebar />
        </div>

        {/*admin dashbord content  */}
        <div className="sm:mt-5 p-5 sm:p-0 w-full ">
       <h1>Dashbooard</h1>
        </div>
      </div>
    </>
  )
}

export default CompayDashboard