import { Select } from "flowbite-react";
import React, { useState } from "react";

function Auth() {
      const [open, setOpen] = useState(false);
      const [regPage,setRegPage]=useState(false)
      console.log(regPage);
      
  return (
   <>
    <div className="">
      <button
        onClick={() => setOpen(true)}
        className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
      >
       Get started
      </button>

      {open && (
        <div
          className="fixed  inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setOpen(false)}
        >
          {/* Modal Container */}
          <div
            className="relative grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-2xl md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Section */}
            <div className="hidden md:flex flex-col justify-between bg-gradient-to-br from-blue-900 to-blue-700 p-8 text-white">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <span className="text-2xl">🎓</span>
                Skilly
              </div>

              <div>
                <h2 className="text-3xl font-bold leading-snug">
                  Empowering students to achieve their full potential.
                </h2>
                <p className="mt-3 text-sm text-blue-100">
                  Manage appointments, track progress, and communicate securely — all in one place.
                </p>
              </div>

              <div className="text-xs text-blue-200">© 2025 Skilly</div>
            </div>

            {/* Right Section */}
            <div className="p-8">
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>

              <h1 className="text-2xl font-semibold">Welcome Back</h1>
              <p className="mt-1 text-sm text-gray-500">
                Please enter your details to sign in.
              </p>

              {regPage ? <div>
                  <form className="mt-6 space-y-5">
                      <div>
                      <label className="block text-sm font-medium text-gray-600">
                        Name
                      </label>
                      <input
                        type="text"
                        // defaultValue="counselor@institution.edu"
                        className="mt-1 w-full rounded-lg border px-3 py-2 focus:border-blue-500 focus:outline-none"
                        placeholder="Enter Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600">
                        Email
                      </label>
                      <input
                        type="email"
                        // defaultValue="counselor@institution.edu"
                        className="mt-1 w-full rounded-lg border px-3 py-2 focus:border-blue-500 focus:outline-none"
                        placeholder="Enter Your Email"
                      />
                    </div>
                      <div>
                      <label className="block text-sm font-medium text-gray-600">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        // defaultValue="counselor@institution.edu"
                        className="mt-1 w-full rounded-lg border px-3 py-2 focus:border-blue-500 focus:outline-none"
                        placeholder="Enter Your Number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600">
                        You are 
                      </label>
                      <Select name="" id="">
                        <option value='Student'>Student</option>
                        <option value='Working'>Working</option>
                        <option value='Counsellor'>Counsellor</option>
                        <option value='institution'>Education Institution</option>
                      </Select>
                    </div>
    
                    <div>
                      <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium text-gray-600">
                          Password
                        </label>
                      
                      </div>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="mt-1 w-full rounded-lg border px-3 py-2 focus:border-blue-500 focus:outline-none"
                      />
                    </div>

                       <div>
                      <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium text-gray-600">
                          RE-Password
                        </label>
                      
                      </div>
                      <input
                        type="password"
                        placeholder="Re-Enter your password"
                        className="mt-1 w-full rounded-lg border px-3 py-2 focus:border-blue-500 focus:outline-none"
                      />
                    </div>
    
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-blue-600 py-2 font-medium text-white hover:bg-blue-700"
                    >
                     Register
                    </button>
                  </form>
    
                  <p className="mt-6 text-center text-sm text-gray-500">
                    Do You  have an account?{" "}
                    <span onClick={()=>setRegPage(false)} className="cursor-pointer text-blue-600 hover:underline">
                   Sign In
                    </span>
                  </p>
              </div> : <div>
                  <form className="mt-6 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600">
                        Email Address
                      </label>
                      <input
                        type="email"
                        // defaultValue="counselor@institution.edu"
                        className="mt-1 w-full rounded-lg border px-3 py-2 focus:border-blue-500 focus:outline-none"
                        placeholder="Enter Your Email"
                      />
                    </div>
    
                    <div>
                      <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium text-gray-600">
                          Password
                        </label>
                        <span className="cursor-pointer text-xs text-blue-600 hover:underline">
                          Forgot password?
                        </span>
                      </div>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="mt-1 w-full rounded-lg border px-3 py-2 focus:border-blue-500 focus:outline-none"
                      />
                    </div>
    
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-blue-600 py-2 font-medium text-white hover:bg-blue-700"
                    >
                      Sign In
                    </button>
                  </form>
    
                  <p className="mt-6 text-center text-sm text-gray-500">
                    Don’t have an account?{" "}
                    <span onClick={()=>setRegPage(true)} className="cursor-pointer text-blue-600 hover:underline">
                     Register
                    </span>
                  </p>
              </div>}

              <div className="mt-6 flex justify-center gap-4 text-xs text-gray-400">
                <span className="cursor-pointer hover:underline">Privacy Policy</span>
                <span className="cursor-pointer hover:underline">Terms of Service</span>
                <span className="cursor-pointer hover:underline">Help Center</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
   </>
  )
}

export default Auth