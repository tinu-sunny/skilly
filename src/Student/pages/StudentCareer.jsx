import React from 'react'
import StudentHeader from '../components/StudentHeader'
import { Button, TextInput } from 'flowbite-react'
import AppFooter from '../../components/AppFooter'
import { FaSortAmountDown } from 'react-icons/fa'
import { MdCampaign, MdDesignServices, MdEco, MdOutlineAnalytics, MdSecurity } from 'react-icons/md'
function StudentCareer() {
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
                     <div className='w-[50%] '> <TextInput type='search' placeholder='search for careers,skills or industries...'/></div>
                    <div className=''> <Button>Explore</Button></div>
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
          {/* cards-1 */}
          <div>
              <div className=" rounded-xl border-2  hover:border-primary hover:shadow-[0_0_20px_rgba(43,238,121,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col dark:bg-blue-800">
  <div className="h-32 bg-cover bg-center relative" data-alt="Abstract visualization of data networks and graphs"  style={{
      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCBdoKF-yJH8v2wkSdkQEyudmPF2LKaWCbsvbum8g7D07p0bAtkKaoxh9_tuiqThBLpB82aP8CnzR9K3HmHUIcZcUhRNnBODuGD9_5y6nLOuWmMdMHx2aHjORYzzcMLq6CvYlM0e9DMXsoRwFmVn45HVU4EzZZ7y-CyzHqV_N_VF_BxjRDEb6PzYYufU3QfjVyLFZp9ISr2Q1qSwPvCy-ltCtIJnUffErWhFP5cxOWcSw8Ijp2Uurse-lh3ouErYS107jNk5imjGxg")`,
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
  <h3 className="text-xl font-bold  group-hover:text-primary transition-colors">Data Scientist</h3>
  <div className="bg-[#102217] p-1.5 rounded-lg text-[#92c9a8]">
  <span className="material-symbols-outlined"><MdOutlineAnalytics/></span>
  </div>
  </div>
  <p className="text-gray-400 text-sm line-clamp-2 mb-4">Analyze complex data to help companies make smarter decisions and predict future trends.</p>
  <div className="mt-auto grid grid-cols-2 gap-4 border-t border-[#234832] pt-4">
  <div>
  <p className="text-xs text-[#] mb-0.5">Avg. Salary</p>
  <p className=" font-bold">$120k</p>
  </div>
  <div>
  <p className="text-xs text-[#92c9a8] mb-0.5">Growth</p>
  <p className="text-primary font-bold">+36%</p>
  </div>
  </div>
  </div>
  </div>
          </div>
  
          {/* cards-2 */}
          <div>
              <div className=" rounded-xl border-2  hover:border-primary hover:shadow-[0_0_20px_rgba(43,238,121,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col dark:bg-blue-800">
  <div className="h-32 bg-cover bg-center relative" data-alt="Abstract visualization of data networks and graphs"  style={{
      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9sgHVvtEimz_ZEdk2u2ble-4wvPyUjImCfwJSN4L2JP3KEUdYmQeRk5zdZqCvL4mWfwmPhjkxl8KugSTRIBGnJJaRwzJa-Ybo_-RvQkzzzIHAz2vZvRn1qw4a8nnpKpN91dZL-btVEat72cOV1ETytcWb38nV5Ewf_Un4PdO4dWw_k7LboqarIKOQjufXr5uTj6q7ifW4Dx_7zBerkK15s6mDJj40v8qfHRrJJdeVi32HO3QLG0u9nrQRgir90tLZNtdn5wuFWC8")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "180px"
    }}>
  <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent"></div>
  <div className="absolute top-3 left-3">
  <span className="bg-primary/20 text-primary border border-primary/30 text-xs font-bold px-2.5 py-1 rounded-md">Creative</span>
  </div>
  </div>
  <div className="p-5 flex flex-col flex-1">
  <div className="flex items-start justify-between mb-2">
  <h3 className="text-xl font-bold  group-hover:text-primary transition-colors">UX Designer</h3>
  <div className="bg-[#102217] p-1.5 rounded-lg text-[#92c9a8]">
  <span className="material-symbols-outlined"><MdDesignServices /></span>
  </div>
  </div>
  <p className="text-gray-400 text-sm line-clamp-2 mb-4">Design intuitive digital experiences that delight users and solve their problems.</p>
  <div className="mt-auto grid grid-cols-2 gap-4 border-t border-[#234832] pt-4">
  <div>
  <p className="text-xs text-[#] mb-0.5">Avg. Salary</p>
  <p className=" font-bold">$95k</p>
  </div>
  <div>
  <p className="text-xs text-[#92c9a8] mb-0.5">Growth</p>
  <p className="text-primary font-bold">+13%</p>
  </div>
  </div>
  </div>
  </div>
          </div>
  
            {/* cards-3 */}
          <div>
              <div className=" rounded-xl border-2  hover:border-primary hover:shadow-[0_0_20px_rgba(43,238,121,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col dark:bg-blue-800">
  <div className="h-32 bg-cover bg-center relative" data-alt="Abstract visualization of data networks and graphs"  style={{
      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBbyJ34NS78z_ldOMUiirKKOoOyWtfxjS-XX4AZI_HBitPHRaoh0cgxAbaCieyNwP_7G5cH9wc9zEAW2DjPy8Qwp4dlmoliiVU_Iz4Lz70Z85m2EQp04rkVbMlTpj0TOv834dH_Z2uNl-IOQR8dLPS_aOh-Isyky3z05TtveCRjgG76MJ8bYNFe1uOvaIgTacA81CsGnDVEhNkpFvipKpe-T5Kd8TP-xu469GPn6NRM-Iyu2OBlJ2t8_MGXaLmdPy3VnBIY8OUSLPM")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "180px"
    }}>
  <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent"></div>
  <div className="absolute top-3 left-3">
  <span className="bg-primary/20 text-primary border border-primary/30 text-xs font-bold px-2.5 py-1 rounded-md">Green Tech</span>
  </div>
  </div>
  <div className="p-5 flex flex-col flex-1">
  <div className="flex items-start justify-between mb-2">
  <h3 className="text-xl font-bold  group-hover:text-primary transition-colors">Env. Engineer</h3>
  <div className="bg-[#102217] p-1.5 rounded-lg text-[#92c9a8]">
  <span className="material-symbols-outlined"><MdEco /></span>
  </div>
  </div>
  <p className="text-gray-400 text-sm line-clamp-2 mb-4">Develop solutions for environmental problems and lead sustainable initiatives.</p>
  <div className="mt-auto grid grid-cols-2 gap-4 border-t border-[#234832] pt-4">
  <div>
  <p className="text-xs text-[#] mb-0.5">Avg. Salary</p>
  <p className=" font-bold">$85k</p>
  </div>
  <div>
  <p className="text-xs text-[#92c9a8] mb-0.5">Growth</p>
  <p className="text-primary font-bold">+8%</p>
  </div>
  </div>
  </div>
  </div>
          </div>
  
              {/* cards-4 */}
          <div>
              <div className=" rounded-xl border-2  hover:border-primary hover:shadow-[0_0_20px_rgba(43,238,121,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col dark:bg-blue-800">
  <div className="h-32 bg-cover bg-center relative" data-alt="Abstract visualization of data networks and graphs"  style={{
      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCaDRGas2rwV_1cHCyaGBu_31B39uDr6N1uxvj0ANpVG2VxUkuquZu-hDA9UiChO1tcDLFx_fbm16C6zgDn1Q7K6-MFwXOoLXI-h2SFIim38ycKDlPWJQo8KIsbJfqoxrvaLw-h_11NEFkua-ZOmEjBqMuCJpZ685AESkHKzGec9uv4yBbbOTuMRh-0EqvUUB9XP1GnhEULnFj21OVw55zFBOpkfwbPovsqcT0W7iNuLtsAVDQ_JIKO-rSdgAxWZuIevnMgdyozRZI")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "180px"
    }}>
  <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent"></div>
  <div className="absolute top-3 left-3">
  <span className="bg-primary/20 text-primary border border-primary/30 text-xs font-bold px-2.5 py-1 rounded-md">Popular</span>
  </div>
  </div>
  <div className="p-5 flex flex-col flex-1">
  <div className="flex items-start justify-between mb-2">
  <h3 className="text-xl font-bold  group-hover:text-primary transition-colors">Digital Marketer</h3>
  <div className="bg-[#102217] p-1.5 rounded-lg text-[#92c9a8]">
  <span className="material-symbols-outlined"><MdCampaign /></span>
  </div>
  </div>
  <p className="text-gray-400 text-sm line-clamp-2 mb-4">Drive brand awareness and lead generation through digital channels.</p>
  <div className="mt-auto grid grid-cols-2 gap-4 border-t border-[#234832] pt-4">
  <div>
  <p className="text-xs text-[#] mb-0.5">Avg. Salary</p>
  <p className=" font-bold">$70k</p>
  </div>
  <div>
  <p className="text-xs text-[#92c9a8] mb-0.5">Growth</p>
  <p className="text-primary font-bold">+10%</p>
  </div>
  </div>
  </div>
  </div>
          </div>
  
            {/* cards-5 */}
          <div>
              <div className=" rounded-xl border-2  hover:border-primary hover:shadow-[0_0_20px_rgba(43,238,121,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col dark:bg-blue-800">
  <div className="h-32 bg-cover bg-center relative" data-alt="Abstract visualization of data networks and graphs"  style={{
      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSAzzzcE8V-nQvpKcmCtBxK0oEZ3t2ogxGc2zm17UcaIYD3RU6YCAIkEP2sc39y1frntJDms93EggazyJVRhV7mV1Dni-EacgNqDS5ljw0jfoDE9NeY70ouHql_Nb6rkLUwJ1HSVFmuYTBlELjb1HpqeqKALjYOsTByhZWCfuc7WHU4pzxESb56Ft1DvXTA-atlX6JgUj-uxOoeovx3LsrkfpSYwepYgjzzQLGcRBHx7nIgTgCdR9Yypek-aF0b9tRdpqiO4TpXmc")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "180px"
    }}>
  <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent"></div>
  <div className="absolute top-3 left-3">
  <span className="bg-primary/20 text-primary border border-primary/30 text-xs font-bold px-2.5 py-1 rounded-md">Critical</span>
  </div>
  </div>
  <div className="p-5 flex flex-col flex-1">
  <div className="flex items-start justify-between mb-2">
  <h3 className="text-xl font-bold  group-hover:text-primary transition-colors">Cyber Security</h3>
  <div className="bg-[#102217] p-1.5 rounded-lg text-[#92c9a8]">
  <span className="material-symbols-outlined"><MdSecurity /></span>
  </div>
  </div>
  <p className="text-gray-400 text-sm line-clamp-2 mb-4">Protect computer systems and networks from information disclosure and theft.</p>
  <div className="mt-auto grid grid-cols-2 gap-4 border-t border-[#234832] pt-4">
  <div>
  <p className="text-xs text-[#] mb-0.5">Avg. Salary</p>
  <p className=" font-bold">$115k</p>
  </div>
  <div>
  <p className="text-xs text-[#92c9a8] mb-0.5">Growth</p>
  <p className="text-primary font-bold">+33%</p>
  </div>
  </div>
  </div>
  </div>
          </div>
  
              {/* cards-6 */}
          <div>
              <div className=" rounded-xl border-2  hover:border-primary hover:shadow-[0_0_20px_rgba(43,238,121,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col dark:bg-blue-800">
  <div className="h-32 bg-cover bg-center relative" data-alt="Abstract visualization of data networks and graphs"  style={{
      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCBdoKF-yJH8v2wkSdkQEyudmPF2LKaWCbsvbum8g7D07p0bAtkKaoxh9_tuiqThBLpB82aP8CnzR9K3HmHUIcZcUhRNnBODuGD9_5y6nLOuWmMdMHx2aHjORYzzcMLq6CvYlM0e9DMXsoRwFmVn45HVU4EzZZ7y-CyzHqV_N_VF_BxjRDEb6PzYYufU3QfjVyLFZp9ISr2Q1qSwPvCy-ltCtIJnUffErWhFP5cxOWcSw8Ijp2Uurse-lh3ouErYS107jNk5imjGxg")`,
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
  <h3 className="text-xl font-bold  group-hover:text-primary transition-colors">Data Scientist</h3>
  <div className="bg-[#102217] p-1.5 rounded-lg text-[#92c9a8]">
  <span className="material-symbols-outlined"><MdOutlineAnalytics/></span>
  </div>
  </div>
  <p className="text-gray-400 text-sm line-clamp-2 mb-4">Analyze complex data to help companies make smarter decisions and predict future trends.</p>
  <div className="mt-auto grid grid-cols-2 gap-4 border-t border-[#234832] pt-4">
  <div>
  <p className="text-xs text-[#] mb-0.5">Avg. Salary</p>
  <p className=" font-bold">$120k</p>
  </div>
  <div>
  <p className="text-xs text-[#92c9a8] mb-0.5">Growth</p>
  <p className="text-primary font-bold">+36%</p>
  </div>
  </div>
  </div>
  </div>
          </div>
  
          {/* cards-7 */}
          <div>
              <div className=" rounded-xl border-2  hover:border-primary hover:shadow-[0_0_20px_rgba(43,238,121,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col dark:bg-blue-800">
  <div className="h-32 bg-cover bg-center relative" data-alt="Abstract visualization of data networks and graphs"  style={{
      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9sgHVvtEimz_ZEdk2u2ble-4wvPyUjImCfwJSN4L2JP3KEUdYmQeRk5zdZqCvL4mWfwmPhjkxl8KugSTRIBGnJJaRwzJa-Ybo_-RvQkzzzIHAz2vZvRn1qw4a8nnpKpN91dZL-btVEat72cOV1ETytcWb38nV5Ewf_Un4PdO4dWw_k7LboqarIKOQjufXr5uTj6q7ifW4Dx_7zBerkK15s6mDJj40v8qfHRrJJdeVi32HO3QLG0u9nrQRgir90tLZNtdn5wuFWC8")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "180px"
    }}>
  <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent"></div>
  <div className="absolute top-3 left-3">
  <span className="bg-primary/20 text-primary border border-primary/30 text-xs font-bold px-2.5 py-1 rounded-md">Creative</span>
  </div>
  </div>
  <div className="p-5 flex flex-col flex-1">
  <div className="flex items-start justify-between mb-2">
  <h3 className="text-xl font-bold  group-hover:text-primary transition-colors">UX Designer</h3>
  <div className="bg-[#102217] p-1.5 rounded-lg text-[#92c9a8]">
  <span className="material-symbols-outlined"><MdDesignServices /></span>
  </div>
  </div>
  <p className="text-gray-400 text-sm line-clamp-2 mb-4">Design intuitive digital experiences that delight users and solve their problems.</p>
  <div className="mt-auto grid grid-cols-2 gap-4 border-t border-[#234832] pt-4">
  <div>
  <p className="text-xs text-[#] mb-0.5">Avg. Salary</p>
  <p className=" font-bold">$95k</p>
  </div>
  <div>
  <p className="text-xs text-[#92c9a8] mb-0.5">Growth</p>
  <p className="text-primary font-bold">+13%</p>
  </div>
  </div>
  </div>
  </div>
          </div>
  
            {/* cards-8 */}
          <div>
              <div className=" rounded-xl border-2  hover:border-primary hover:shadow-[0_0_20px_rgba(43,238,121,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col dark:bg-blue-800">
  <div className="h-32 bg-cover bg-center relative" data-alt="Abstract visualization of data networks and graphs"  style={{
      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBbyJ34NS78z_ldOMUiirKKOoOyWtfxjS-XX4AZI_HBitPHRaoh0cgxAbaCieyNwP_7G5cH9wc9zEAW2DjPy8Qwp4dlmoliiVU_Iz4Lz70Z85m2EQp04rkVbMlTpj0TOv834dH_Z2uNl-IOQR8dLPS_aOh-Isyky3z05TtveCRjgG76MJ8bYNFe1uOvaIgTacA81CsGnDVEhNkpFvipKpe-T5Kd8TP-xu469GPn6NRM-Iyu2OBlJ2t8_MGXaLmdPy3VnBIY8OUSLPM")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "180px"
    }}>
  <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent"></div>
  <div className="absolute top-3 left-3">
  <span className="bg-primary/20 text-primary border border-primary/30 text-xs font-bold px-2.5 py-1 rounded-md">Green Tech</span>
  </div>
  </div>
  <div className="p-5 flex flex-col flex-1">
  <div className="flex items-start justify-between mb-2">
  <h3 className="text-xl font-bold  group-hover:text-primary transition-colors">Env. Engineer</h3>
  <div className="bg-[#102217] p-1.5 rounded-lg text-[#92c9a8]">
  <span className="material-symbols-outlined"><MdEco /></span>
  </div>
  </div>
  <p className="text-gray-400 text-sm line-clamp-2 mb-4">Develop solutions for environmental problems and lead sustainable initiatives.</p>
  <div className="mt-auto grid grid-cols-2 gap-4 border-t border-[#234832] pt-4">
  <div>
  <p className="text-xs text-[#] mb-0.5">Avg. Salary</p>
  <p className=" font-bold">$85k</p>
  </div>
  <div>
  <p className="text-xs text-[#92c9a8] mb-0.5">Growth</p>
  <p className="text-primary font-bold">+8%</p>
  </div>
  </div>
  </div>
  </div>
          </div>
  
              {/* cards-9 */}
          <div>
              <div className=" rounded-xl border-2  hover:border-primary hover:shadow-[0_0_20px_rgba(43,238,121,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col dark:bg-blue-800">
  <div className="h-32 bg-cover bg-center relative" data-alt="Abstract visualization of data networks and graphs"  style={{
      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCaDRGas2rwV_1cHCyaGBu_31B39uDr6N1uxvj0ANpVG2VxUkuquZu-hDA9UiChO1tcDLFx_fbm16C6zgDn1Q7K6-MFwXOoLXI-h2SFIim38ycKDlPWJQo8KIsbJfqoxrvaLw-h_11NEFkua-ZOmEjBqMuCJpZ685AESkHKzGec9uv4yBbbOTuMRh-0EqvUUB9XP1GnhEULnFj21OVw55zFBOpkfwbPovsqcT0W7iNuLtsAVDQ_JIKO-rSdgAxWZuIevnMgdyozRZI")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "180px"
    }}>
  <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent"></div>
  <div className="absolute top-3 left-3">
  <span className="bg-primary/20 text-primary border border-primary/30 text-xs font-bold px-2.5 py-1 rounded-md">Popular</span>
  </div>
  </div>
  <div className="p-5 flex flex-col flex-1">
  <div className="flex items-start justify-between mb-2">
  <h3 className="text-xl font-bold  group-hover:text-primary transition-colors">Digital Marketer</h3>
  <div className="bg-[#102217] p-1.5 rounded-lg text-[#92c9a8]">
  <span className="material-symbols-outlined"><MdCampaign /></span>
  </div>
  </div>
  <p className="text-gray-400 text-sm line-clamp-2 mb-4">Drive brand awareness and lead generation through digital channels.</p>
  <div className="mt-auto grid grid-cols-2 gap-4 border-t border-[#234832] pt-4">
  <div>
  <p className="text-xs text-[#] mb-0.5">Avg. Salary</p>
  <p className=" font-bold">$70k</p>
  </div>
  <div>
  <p className="text-xs text-[#92c9a8] mb-0.5">Growth</p>
  <p className="text-primary font-bold">+10%</p>
  </div>
  </div>
  </div>
  </div>
          </div>
  
            {/* cards-10 */}
          <div>
              <div className=" rounded-xl border-2  hover:border-primary hover:shadow-[0_0_20px_rgba(43,238,121,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col dark:bg-blue-800">
  <div className="h-32 bg-cover bg-center relative " data-alt="Abstract visualization of data networks and graphs"  style={{
      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSAzzzcE8V-nQvpKcmCtBxK0oEZ3t2ogxGc2zm17UcaIYD3RU6YCAIkEP2sc39y1frntJDms93EggazyJVRhV7mV1Dni-EacgNqDS5ljw0jfoDE9NeY70ouHql_Nb6rkLUwJ1HSVFmuYTBlELjb1HpqeqKALjYOsTByhZWCfuc7WHU4pzxESb56Ft1DvXTA-atlX6JgUj-uxOoeovx3LsrkfpSYwepYgjzzQLGcRBHx7nIgTgCdR9Yypek-aF0b9tRdpqiO4TpXmc")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "180px"
      
    }}>
  <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent"></div>
  <div className="absolute top-3 left-3">
  <span className="bg-primary/20 text-primary border border-primary/30 text-xs font-bold px-2.5 py-1 rounded-md">Critical</span>
  </div>
  </div>
  <div className="p-5 flex flex-col flex-1">
  <div className="flex items-start justify-between mb-2">
  <h3 className="text-xl font-bold  group-hover:text-primary transition-colors">Cyber Security</h3>
  <div className="bg-[#102217] p-1.5 rounded-lg text-[#92c9a8]">
  <span className="material-symbols-outlined"><MdSecurity /></span>
  </div>
  </div>
  <p className="text-gray-400 text-sm line-clamp-2 mb-4">Protect computer systems and networks from information disclosure and theft.</p>
  <div className="mt-auto grid grid-cols-2 gap-4 border-t border-[#234832] pt-4">
  <div>
  <p className="text-xs text-[#] mb-0.5">Avg. Salary</p>
  <p className=" font-bold">$115k</p>
  </div>
  <div>
  <p className="text-xs text-[#92c9a8] mb-0.5">Growth</p>
  <p className="text-primary font-bold">+33%</p>
  </div>
  </div>
  </div>
  </div>
          </div>
  
  
          
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