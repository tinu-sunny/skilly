import React, { useState } from "react";
import AppFooter from "../components/AppFooter";
import Header from "../components/Header";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { contact } from "../services/allAPIs";

function Contact() {
  const initialContactState = {
    username: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  };
  const [userContactDetails, setUserCountatDetails] =
    useState(initialContactState);

  const [validation, setValidation] = useState({});

  // console.log(userContactDetails);
  // console.log(validation);

  const contactForm = async () => {
    // console.log('inside  contactForm');
    // validation
    const { username, email, phone, inquiryType, message } = userContactDetails;
    let validErr = {};
    //  console.log(validErr);

    if (!username) {
      validErr.username = "Name is requeired";
    }
    if (!email) {
      validErr.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validErr.email = "Email is not valid";
    }

    if (!phone) {
      validErr.phone = "phone Number is requeired";
    } else if (!/^\d{10}$/.test(phone)) {
      validErr.phone = "It's not a valid phone number";
    }
    if (!inquiryType) {
      validErr.inquiryType = "Inquiry Type is requeired";
    }
    if (!message) {
      validErr.message = "Message is requeired";
    }

    setValidation(validErr);

    if (Object.keys(validErr).length > 0) {
      return;
    } else {
      const response = await contact(userContactDetails);
      // console.log(response);
      if (response.status == 200) {
        alert(response.data.message);
        setUserCountatDetails(initialContactState);
      } else {
        alert("Erroe... try after some time");
      }

      // console.log('inside the save data else');
    }
  };

  const Clearform = () => {
    setUserCountatDetails(initialContactState);
  };

  return (
    <>
      <div className="dark:bg-black">
        {/* App header */}
        <Header />
        <div className="dark:bg-black">
          {/* contact */}
          <section className="  lg:p-20">
            <div className=" grid sm:grid-cols-2 justify-between gap-5  m-5 lg:m-0  ">
              {/* contact Details */}
              <div className="sm:shadow-2xl shadow-amber-200 sm:p-15 p-4 rounded-4xl shadow border-5 border-amber-200 sm:h-150 dark:border-blue-500 dark:shadow-blue-800">
                {/* heading  */}
                <div className=" flex flex-col gap-2">
                  <h2 className="text-[#111418] font-extrabold  text-2xl sm:text-4xl dark:text-white ">
                    Let's build your future, together.
                  </h2>
                  <p className="text-slate-500 dark:text-[#f7f7f7c7]">
                    Have questions about Skillly? Whether you're a student, a
                    partner, or a company — we’re ready to help. Pick a
                    category, tell us your story, and we'll route your message
                    to the right team.
                  </p>
                </div>

                {/* time response */}
                <div className="mt-10 lg:mt-20 ">
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <div
                      className="flex items-center gap-3  rounded-2xl px-5 py-4
                  bg-white shadow-sm hover:shadow-md transition
                  dark:bg-blue-900 dark:border-blue-700"
                    >
                      <div
                        className="flex items-center justify-center w-10 h-10 rounded-full 
                    bg-blue-100 text-blue-600
                    dark:bg-blue-800 dark:text-white"
                      >
                        ⏱️
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Response time
                        <span className="block text-base font-semibold text-gray-900 dark:text-white">
                          24 hrs
                        </span>
                      </p>
                    </div>

                    {/* Support Hours */}
                    <div
                      className="flex items-center gap-3  rounded-2xl px-5 py-4
                  bg-white shadow-sm hover:shadow-md transition
                  dark:bg-blue-900 dark:border-blue-700"
                    >
                      <div
                        className="flex items-center justify-center w-10 h-10 rounded-full 
                    bg-green-100 text-green-600
                    dark:bg-green-800 dark:text-white"
                      >
                        📞
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Support
                        <span className="block text-base font-semibold text-gray-900 dark:text-white">
                          Mon–Fri, 9am–6pm
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Social media */}
                <div className="text-center p-8">
                  <p className="text-slate-400 font-medium mt-5 dark:text-white">
                    Follow Us
                  </p>

                  <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
                    <a
                      className="flex items-center justify-center
                  w-12 h-12 sm:w-14 sm:h-14
                  rounded-full cursor-pointer
                  text-slate-500 dark:text-white
                  bg-slate-100 dark:bg-transparent
                  hover:bg-blue-600 hover:text-white
                  dark:hover:bg-blue-800
                  hover:scale-110 transition-all duration-300
                  shadow-sm hover:shadow-md"
                    >
                      <FaLinkedin size={22} />
                    </a>

                    <a
                      className="flex items-center justify-center
                  w-12 h-12 sm:w-14 sm:h-14
                  rounded-full cursor-pointer
                  text-slate-500 dark:text-white
                  bg-slate-100 dark:bg-transparent
                  hover:bg-pink-600 hover:text-white
                  dark:hover:bg-pink-700
                  hover:scale-110 transition-all duration-300
                  shadow-sm hover:shadow-md"
                    >
                      <FaSquareInstagram size={22} />
                    </a>

                    <a
                      className="flex items-center justify-center
                  w-12 h-12 sm:w-14 sm:h-14
                  rounded-full cursor-pointer
                  text-slate-500 dark:text-white
                  bg-slate-100 dark:bg-transparent
                  hover:bg-blue-700 hover:text-white
                  dark:hover:bg-blue-700
                  hover:scale-110 transition-all duration-300
                  shadow-sm hover:shadow-md"
                    >
                      <FaFacebook size={22} />
                    </a>

                    <a
                      className="flex items-center justify-center
                  w-12 h-12 sm:w-14 sm:h-14
                  rounded-full cursor-pointer
                  text-slate-500 dark:text-white
                  bg-slate-100 dark:bg-transparent
                  hover:bg-black hover:text-white
                  dark:hover:bg-gray-800
                  hover:scale-110 transition-all duration-300
                  shadow-sm hover:shadow-md"
                    >
                      <FaSquareXTwitter size={22} />
                    </a>

                    <a
                      className="flex items-center justify-center
                  w-12 h-12 sm:w-14 sm:h-14
                  rounded-full cursor-pointer
                  text-slate-500 dark:text-white
                  bg-slate-100 dark:bg-transparent
                  hover:bg-red-600 hover:text-white
                  dark:hover:bg-red-700
                  hover:scale-110 transition-all duration-300
                  shadow-sm hover:shadow-md"
                    >
                      <IoLogoYoutube size={22} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Support */}
              <div className="sm:shadow-2xl shadow-amber-200 sm:p-15 p-4 rounded-4xl shadow border-5 border-amber-200 sm:h-150 dark:border-blue-500 dark:shadow-blue-800">
                {/* heading */}

                <div className="flex flex-row justify-between gap-5 flex-wrap mb-1">
                  {/* heading */}
                  <div>
                    <h1 className="text-[#111418] text-2xl mb-2 sm:text-3xl leading-tight  font-extrabold dark:text-white">
                      Contact Support
                    </h1>
                    <p className="text-slate-500 font-medium max-w-70  dark:text-[#f7f7f7c7] ">
                      Fill this form and we'll get back to you fast.
                    </p>
                  </div>
                  {/*contact */}
                  <div className="sm:text-start flex sm:flex-col gap-3 mb-3 ">
                    <p className="text-slate-500 font-medium leading-normal dark:text-[#f7f7f7c7] ">
                      Need immediate help?
                    </p>
                    <p className="text-green-900 text-end cursor-pointer font-medium hover:text-blue-600">
                      <a href="tel:+919876543210">Call us </a>→
                    </p>
                  </div>
                </div>

                {/* form */}
                <div>
                  <form>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <Label className="text-slate-500 font-medium">
                          Full Name
                        </Label>
                        <TextInput
                          type="text"
                          placeholder="Enter Your Name"
                          onChange={(e) =>
                            setUserCountatDetails({
                              ...userContactDetails,
                              username: e.target.value,
                            })
                          }
                          value={userContactDetails.username}
                        />
                        <p className="text-red-800 ">{validation.username}</p>
                      </div>
                      <div>
                        <Label className="text-slate-500 font-medium">
                          Email
                        </Label>
                        <TextInput
                          type="email"
                          placeholder="You@gmail.com"
                          onChange={(e) =>
                            setUserCountatDetails({
                              ...userContactDetails,
                              email: e.target.value,
                            })
                          }
                          value={userContactDetails.email}
                        ></TextInput>
                        <p className="text-red-800 ">{validation.email}</p>
                      </div>
                      <div>
                        <Label className="text-slate-500 font-medium">
                          Phone Number
                        </Label>
                        <TextInput
                          type="number"
                          placeholder="+91 8123456687"
                          onChange={(e) =>
                            setUserCountatDetails({
                              ...userContactDetails,
                              phone: e.target.value,
                            })
                          }
                          value={userContactDetails.phone}
                        ></TextInput>
                        <p className="text-red-800 ">{validation.phone}</p>
                      </div>

                      <div>
                        <Label className="text-slate-500 font-medium dark:text-white">
                          Inquiry Type
                        </Label>
                        <select
                          className="w-full p-2 border border-slate-500 rounded-lg dark:text-white dark:bg-black "
                          onChange={(e) =>
                            setUserCountatDetails({
                              ...userContactDetails,
                              inquiryType: e.target.value,
                            })
                          }
                          value={userContactDetails.inquiryType}
                        >
                          <option>Select Inquiry Type</option>
                          <option>Student Support</option>
                          <option>Counselor Partnership</option>
                          <option>Institution Inquiries</option>
                          <option>Company Collaboration</option>
                          <option>Technical Support</option>
                          <option>General Queries</option>
                        </select>
                        <p className="text-red-800 ">
                          {validation.inquiryType}
                        </p>
                      </div>

                      <Label className="text-slate-500 font-medium">
                        Message
                      </Label>
                    </div>
                    <Textarea
                      rows={"3"}
                      className="mb-5"
                      onChange={(e) =>
                        setUserCountatDetails({
                          ...userContactDetails,
                          message: e.target.value,
                        })
                      }
                      value={userContactDetails.message}
                    ></Textarea>
                    <p className="text-red-800 ">{validation.message}</p>

                    <div className=" flex flex-2   justify-between gap-3 sm:m-3 items-center  w-full ">
                      <div className=" ">
                        {" "}
                        <Button
                          className="text-center sm:p-8 p-6  sm:rounded-4xl rounded-2xl sm:w-30 cursor-pointer"
                          onClick={contactForm}
                        >
                          Send Message
                        </Button>
                      </div>
                      <div className="mr-8">
                        {" "}
                        <Button
                          className=" cursor-pointer text-center sm:p-2 sm:rounded-3xl bg-transparent sm:w-20 text-slate-500 hover:text-black hover:bg-transparent outline dark:text-white dark:hover:text-white"
                          onClick={Clearform}
                        >
                          Clear
                        </Button>
                      </div>
                    </div>
                    <p className="text-slate-500 font-medium w-full text-center">
                      Prefer live chat?{" "}
                      <a className="text-blue-600 hover:cursor-pointer hover:underline">
                        Start a conversation
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* location */}
          <div className="sm:p-15 p-5 rounded-lg ">
            <iframe
              title="google-map"
              className="w-full h-56 rounded-2xl shadow"
              src="https://maps.google.com/maps?q=Kochi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
            <h2></h2>
          </div>
        </div>

        {/* App Footer */}
        <AppFooter />
      </div>
    </>
  );
}

export default Contact;
