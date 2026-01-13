import React, { useEffect, useState } from 'react'
import StudentHeader from '../components/StudentHeader'
import { Button, TextInput } from 'flowbite-react'
import AppFooter from '../../components/AppFooter'
import { FaSortAmountDown } from 'react-icons/fa'
import { MdCampaign, MdDesignServices, MdEco, MdOutlineAnalytics, MdSecurity } from 'react-icons/md'
import { careerview } from '../../services/allAPIs'
import { h1 } from 'framer-motion/client'
import { serverURL } from '../../services/serverURL'
function StudentCareer() {
// caerrfields view 
  const [careerfields,setCareerfields] = useState([])

  // store search keyword 
  const [keyword,setKeyword]=useState('')
  const [sortData,setSortData]= useState([])

console.log(keyword);

const search = async ()=>{
 if(keyword){
  const search = keyword.trim().toLowerCase()
  const fliterdata = careerfields.filter(item=>item.coursename?.toLowerCase().includes(search) || item.category?.toLowerCase().includes(search))
   
setSortData(fliterdata)


 }

 else{
  setSortData(careerfields)
 }
}

useEffect(()=>{
  search()
},[keyword,careerfields])

// caerrfields view api function
  const careerfieldsView = async ()=>{
          
    const response = await careerview()
    console.log(response);
    if(response.status==200){
      setCareerfields(response.data.data)
    }
    
  }

  useEffect(()=>{
    careerfieldsView()
  },[])

  // search function 


  return (
     <>
  <div className='dark:bg-black'>
     <div className='flex flex-col sm:flex-row '>
                  {/* Header */}
  
                  <div>
                      <StudentHeader/>
                  </div>
                            
                            {/* DashBoard content */}
                  <div className='p-10 w-full'>
                  
                  {/* welcome message with name */}
                  <section className='mb-8'>
                      <h1 className='text-[#111418] text-4xl font-bold leading-tight text-center mb-3 dark:text-white '> Discover Your Future Path</h1>
                      <p className='text-slate-500  font-medium leading-normal mb-8 text-center  dark:text-white'>
                           Explore career fields, view salary stats, and meet professionals. Find the role that fits your passion.
                      </p>
                  </section>
  
                  {/* search bar  */}
  
                  <section>
                 <div className='flex w-full items-stretch justify-center rounded-xl h-14  p-2'>
                     <div className='w-[50%] '> <TextInput type='search' placeholder='search for careers,skills or industries...' onChange={(e)=>{setKeyword(e.target.value)}}/></div>
                    <div className=''></div>
                 </div>
                  </section>
  
                  {/* #tag section */}
  
                  <section>
                      <div className='flex justify-center flex-wrap items-center sm:ml-[-100px] gap-3'>
                          <p className='text-[#111418] font-medium  dark:text-white'>Popular :</p>
                          <Button className='bg-transparent text-black hover:border-2 rounded-4xl hover:bg-transparent'>#Tech</Button>
                              <Button className='bg-transparent text-black hover:border-2 rounded-4xl hover:bg-transparent sm:w-20 sm:text-[10px] font-bold'>#Healthcare</Button>
                                  <Button className='bg-transparent text-black hover:border-2 rounded-4xl hover:bg-transparent'>#Creative</Button>
                                  <Button className='bg-transparent text-black hover:border-2 rounded-4xl hover:bg-transparent'>#Engineering</Button>
                                  <Button className='bg-transparent text-black hover:border-2 rounded-4xl hover:bg-transparent'>#Business</Button>
                      </div>
                  </section>
  
                  {/* Sorting and fliter */}
  
                <section className='mt-5'>
                         <div className='flex sm:justify-between '>
                                   {/* Sort  option */}
                                   <div className='justify-start'>
                                        <div className='flex items-start gap-2'>
                                          <label className='text-[#111418] sm:font-medium whitespace-nowrap  dark:text-white'>Sort by :</label>
                                          <select className='cursor-pointer rounded-4xl sm:font-medium text-center  dark:bg-black dark:border-2 dark:text-white '>
                                              <option className=' dark:text-white'>Recommended</option>
                                              <option className=' dark:text-white'>Highest Paying</option>
                                              <option className=' dark:text-white'>Fastest Growing</option>
                                              <option className=' dark:text-white'>Most Popular</option>
                                          </select>
                                        </div>
                                   </div>
  
  
                                   {/* Fillter Button */}
  
                                   <div className='justify-end '>
                                     <Button className='bg-transparent text-black text-xl hover:bg-transparent border-2'><FaSortAmountDown /></Button>
                                   </div>
                         </div>
                  </section>   
     {/* display course cards */}
  
     <section className='mt-13'>
  
      <div className='grid sm:grid-cols-3 gap-5'>
          {/* cards */}
         {sortData && sortData.length > 0 ? sortData.map(item=>( <div>
              <div key={item._id} className=" rounded-xl border-2  hover:border-primary hover:shadow-[0_0_20px_rgba(43,238,121,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col dark:bg-blue-800">
  <div className="h-32 bg-cover bg-center relative" data-alt="Abstract visualization of data networks and graphs"  style={{
     backgroundImage: `url(${serverURL}/uploads/${item.thumbnail})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "180px"
    }}>
  <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent"></div>
  <div className="absolute top-3 left-3">
  <span className="bg-primary/20 text-primary border border-primary/30 text-xs font-bold px-2.5 py-1 rounded-md">High Demand</span>
  </div>
  </div>
  <div className="p-5 flex flex-col flex-1">
  <div className="flex items-start justify-between mb-2">
  <h3 className="text-xl font-bold  group-hover:text-primary transition-colors">{item.coursename}</h3>
  <div className="bg-[#102217] p-1.5 rounded-lg text-[#92c9a8]">
  <span className="material-symbols-outlined"><MdOutlineAnalytics/></span>
  </div>
  </div>
  <p className="text-gray-400 text-sm line-clamp-2 mb-4">{item.description}</p>
  <div className="mt-auto grid grid-cols-2 gap-4 border-t border-[#234832] pt-4">
  <div>
  <p className="text-xs text-[#] mb-0.5">Avg. Salary</p>
  <p className=" font-bold">${item.avgsalary}</p>
  </div>
  <div>
  <p className="text-xs text-[#92c9a8] mb-0.5">Growth</p>
  <p className="text-primary font-bold">+36%</p>
  </div>
  </div>
  </div>
  </div>
          </div>)):<h1>No Data found</h1>}
  
  
  
          
      </div>
     </section>
                   
  
  
                         
  
           </div>         
  
  
  </div>
                      
       {/* footer */}
    <div className='mt-10'> <AppFooter/></div>
  </div>
   </>
  )
}

export default StudentCareer