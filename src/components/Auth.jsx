import { Select, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { loginUser, userRegistration } from "../services/allAPIs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Auth() {
    const  navigate= useNavigate();

  const [open, setOpen] = useState(false);
  const [regPage, setRegPage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  // console.log(regPage);

  // user data save in state to register

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: 0,
    role: "",
    password: "",
    password2: "",
  });
  // console.log(userData);
  const [errors, setErrors] = useState({});

  //  console.log(errors);

  const registeruser = async () => {
    // console.log("user regiser susess full");
    const { email, username, phone, role, password, password2 } = userData;
    // if(!email||!username||!phone||!role||!password||!password2){
    //   alert('Please fill all fields')

    // }

    let newErrors = {};

    if (!username) {
      newErrors.name = "Name is required";
    }

    if (!userData.phone) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^\d{10}$/.test(userData.phone)) {
      newErrors.phone = "It's not a valid phone number";
    }

    if (!userData.role) {
      newErrors.role = "select your filed is required";
    }

    if (!userData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!userData.password) {
      newErrors.password = "Password is required";
    } else if (userData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else if (userData.password !== password2) {
      newErrors.password = "password  do not match";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // stop execution
    }

    try {
      const response = await userRegistration(userData);
      console.log(response);
      if (response.status == 200) {
        alert(response.data.message);
        setRegPage(false);
        // navigate('/')
      } else {
        alert(response.response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [loginData, SetLoginData] = useState({ email: "", password: "" });
  // console.log(loginData);

  const userLogin = async () => {
    let newErrors = {};
    const { email, password } = loginData;
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is not valid";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await loginUser(loginData);
      console.log(response);

      if (response.status == 200) {
        if (response.data.loginUser.role == "Working") {
          alert("going to working page");
          navigate('/')
        } else if (response.data.loginUser.role == "Student") {
          alert("going to student page");
          navigate('/student-Landing-page')
        } else if (response.data.loginUser.role == "Counsellor") {
          alert("going to conusellor page");
          navigate('/counsellor-dashboard')
        }  else if (response.data.loginUser.role == "institution") {
          alert("going to conusellor page institution");
             navigate('/institution-dashboard')
        }
        else if (response.data.loginUser.role == "admin") {
          alert("going to admin page ");
             navigate('/admin-landing-page')
        }
      } else {
        alert(response.response.data);
      }
    } catch (err) {
      console.log(err);
    }

    //
  };

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
                    Manage appointments, track progress, and communicate
                    securely — all in one place.
                  </p>
                </div>

                <div className="text-xs text-blue-200">© 2025 Skilly</div>
              </div>

              {/* Right Section */}
              <div className="p-8 dark:bg-black dark:text-white">
                <button
                  onClick={() => setOpen(false)}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>

                <h1 className="text-2xl font-semibold">Welcome Back</h1>
                <p className="mt-1 text-sm text-gray-500 dark:text-white">
                  Please enter your details to register .
                </p>

                {regPage ? (
                  <div>
                    <form className="mt-6 space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 dark:text-white">
                          Name
                        </label>
                        <TextInput
                          type="text"
                          // defaultValue="counselor@institution.edu"
                          className="mt-1 w-full "
                          placeholder="Enter Your name"
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              username: e.target.value,
                            })
                          }
                        />
                        <p style={{ color: "red" }}>{errors.name}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 dark:text-white">
                          Email
                        </label>
                        <TextInput
                          type="email"
                          // defaultValue="counselor@institution.edu"
                          className="mt-1 w-full"
                          placeholder="Enter Your Email"
                          onChange={(e) =>
                            setUserData({ ...userData, email: e.target.value })
                          }
                        />
                        <p style={{ color: "red" }}>{errors.email}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 dark:text-white">
                          Phone Number
                        </label>
                        <TextInput
                          type="number"
                          // defaultValue="counselor@institution.edu"
                          className="mt-1 w-full"
                          placeholder="Enter Your Number"
                          onChange={(e) =>
                            setUserData({ ...userData, phone: e.target.value })
                          }
                        />
                        <p style={{ color: "red" }}>{errors.phone}</p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-600 dark:text-white">
                          You are a
                        </label>
                        <Select
                          name=""
                          id=""
                          onChange={(e) =>
                            setUserData({ ...userData, role: e.target.value })
                          }
                        >
                          <option value="*">Select</option>
                          <option value="Student">Student</option>
                          <option value="Working">Working</option>
                          <option value="Counsellor">Counsellor</option>
                          <option value="institution">
                            Education Institution
                          </option>
                        </Select>
                        <p style={{ color: "red" }}>{errors.role}</p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <label className="block text-sm font-medium text-gray-600 dark:text-white">
                            Password
                          </label>
                        </div>
                        <div className="relative">
                          <TextInput
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="mt-1 w-full "
                            onChange={(e) =>
                              setUserData({
                                ...userData,
                                password: e.target.value,
                              })
                            }
                          />

                          <span
                            className="absolute right-3 top-3 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <label className="block text-sm font-medium text-gray-600 dark:text-white">
                            RE-Password
                          </label>
                        </div>

                        <TextInput
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="mt-1 w-full"
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              password2: e.target.value,
                            })
                          }
                        />

                        <p style={{ color: "red" }}>{errors.password}</p>
                      </div>

                      <button
                        type="button"
                        className="w-full rounded-lg bg-blue-600 py-2 font-medium text-white hover:bg-blue-700"
                        onClick={registeruser}
                      >
                        Register
                      </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-500">
                      Do You have an account?{" "}
                      <span
                        onClick={() => setRegPage(false)}
                        className="cursor-pointer text-blue-600 hover:underline"
                      >
                        Sign In
                      </span>
                    </p>
                  </div>
                ) : (
                  <div>
                    <form className="mt-6 space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 dark:text-white">
                          Email Address
                        </label>
                        <p style={{ color: "red" }}>{errors.email}</p>
                        <TextInput
                          type="email"
                          // defaultValue="counselor@institution.edu"
                          className="mt-1 w-full "
                          placeholder="Enter Your Email"
                          // value={loginData.email}
                          onChange={(e) =>
                            SetLoginData({
                              ...loginData,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <label className="block text-sm font-medium text-gray-600 dark:text-white">
                            Password
                          </label>

                          <span className="cursor-pointer text-xs text-blue-600 hover:underline">
                            Forgot password?
                          </span>
                        </div>
                        <p style={{ color: "red" }}>{errors.password}</p>
                        <div className="relative">
                          <TextInput
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="mt-1 w-full"
                            // value={loginData.password}
                            onChange={(e) =>
                              SetLoginData({
                                ...loginData,
                                password: e.target.value,
                              })
                            }
                          />

                          <span
                            className="absolute right-3 top-3 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="w-full rounded-lg bg-blue-600 py-2 font-medium text-white hover:bg-blue-700"
                        onClick={userLogin}
                      >
                        Sign In
                      </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-500">
                      Don’t have an account?{" "}
                      <span
                        onClick={() => setRegPage(true)}
                        className="cursor-pointer text-blue-600 hover:underline"
                      >
                        Register
                      </span>
                    </p>
                  </div>
                )}

                <div className="mt-6 flex justify-center gap-4 text-xs text-gray-400">
                  <span className="cursor-pointer hover:underline">
                    Privacy Policy
                  </span>
                  <span className="cursor-pointer hover:underline">
                    Terms of Service
                  </span>
                  <span className="cursor-pointer hover:underline">
                    Help Center
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Auth;
