import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  Progress,
  TextInput,
  Label,
  Select,
} from "flowbite-react";
import { activeuserAPI, googlelogindatasave } from "../services/allAPIs";
import { Link, useNavigate } from "react-router-dom";

function RoleSelection() {
  const  navigate= useNavigate()
  const [userdata, setUserdata] = useState([]);
  console.log(userdata);
  

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);

  // 🔹 Fetch active user
  const getuserdata = async () => {
    try {
      const response = await activeuserAPI();
      if (response.status === 200) {
        console.log(response);

        
        setUserdata(response.data.user);
      }
    } catch (error) {
      alert("Try again later");
    }
  };

  useEffect(() => {
    getuserdata();
  }, []);

  // 🔹 Step validations
  const validateStep1 = () => {
    let newErrors = {};

    if (!userdata.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!userdata.password || userdata.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    let newErrors = {};

    if (!userdata.role || userdata.role === "*") {
      newErrors.role = "Please select a role";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handlelogin = async ()=>{
    const response =  await googlelogindatasave(userdata)
    console.log(response);
    if(response.status==200){

    sessionStorage.setItem("token", response.data.token);
     switch (response.data.updateuser.role) {
              case "admin":
                navigate("/admin-landing-page");
                break;
              case "student":
                navigate("/student-Landing-page");
                break;
              case "working":
                navigate("/professional-index-page");
                break;
    
              case "counsellor":
                navigate("/counsellor-dashboard");
                break;
    
              case "institution":
                navigate("/institution-dashboard");
                break;
    
              case "company":
                navigate("/company-dashboard");
                break;
    
              default:
                alert(
                  "Unknown role or id is decativated Connect to admin for help"
                );
            
            }
    
    }
    else{
        alert('try after some time')
    }
  }
  // 🔹 Step navigation
  const nextStep = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const progressValue = (step / 3) * 100;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6">
        <h3 className="text-xl font-semibold text-center mb-4">
          Role Selection
        </h3>

        {/* Progress */}
        <Progress progress={progressValue} className="mb-6" />

        {/* Step Indicators */}
        <div className="flex justify-between mb-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold
                ${
                  step >= item
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="mb-6">
          {/* STEP 1 */}
          {step === 1 && (
            <div className="flex flex-col gap-4">
              <div>
                <Label>User Name</Label>
                <TextInput
                  value={userdata.username}
                  onChange={(e) =>
                    setUserdata({ ...userdata, username: e.target.value })
                  }
                />
                {errors.username && (
                  <p className="text-red-500 text-sm">{errors.username}</p>
                )}
              </div>

              <div>
                <Label>Password</Label>
                <TextInput
                  type="password"
                  onChange={(e) =>
                    setUserdata({ ...userdata, password: e.target.value })
                  }
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div>
              <Label className="mb-2 block">You are a</Label>
              <Select
                value={userdata.role}
                onChange={(e) =>
                  setUserdata({ ...userdata, role: e.target.value })
                }
              >
                <option value="*">Select</option>
                <option value="student">Student</option>
                <option value="working">Working</option>
                <option value="counsellor">Counsellor</option>
                <option value="company">Company</option>
                <option value="institution">Education Institution</option>
              </Select>
              {errors.role && (
                <p className="text-red-500 text-sm mt-1">{errors.role}</p>
              )}
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="bg-gray-700 text-white p-4 rounded-xl flex flex-col gap-2">
              <p>
                <b>Name:</b> {userdata.username}
              </p>
              <p>
                <b>Email:</b> {userdata.email}
              </p>
              <p>
                <b>Role:</b> {userdata.role}
              </p>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <Button color="gray" onClick={prevStep} disabled={step === 1}>
            Back
          </Button>

          {step === 3 ? (
           
              <Button onClick={()=>handlelogin()}>Explore</Button>
          
          ) : (
            <Button onClick={nextStep}>Next</Button>
          )}
        </div>
      </Card>
    </div>
  );
}

export default RoleSelection;
