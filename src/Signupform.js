  import React, { useState } from 'react';
import toast from 'react-hot-toast';
  import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
 import "./signupform.css";

  
  const Signupform = ({setIsLoggedIn}) => {
   
  const navigate = useNavigate();


    const [formData,setFormData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmPassword:"" 
    })
  
   const [showPassword,setShowPassword]=useState(false); 

    function changeHandler(e) {
        setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value
        }));
      }

     
       function submitHandler(e){
        e.preventDefault();
        if(formData.password!==formData.confirmPassword){
            toast.error("Passwords do not match");
            return ;
        } 
         
        setIsLoggedIn(true);
        toast.success("Account Created");
         
        navigate("/dashboard");
       }




    return (
      <div className='form-container'>
         <div className='button-container'>
            <button>
                Student
            </button>
            <button>
                Instruction
            </button>
         </div>

         <form  onSubmit={submitHandler}>
           <div>
            <label>
                <p>First Name</p><sup>*</sup>
                <input 
                    required
                    type='text'
                    name='firstname'
                    onChange={changeHandler}
                    placeholder='Enter First Name'
                    value={formData.firstname}
                />
            </label>

            <label>
                <p>Last Name</p><sup>*</sup>
                <input 
                    required
                    type='text'
                    name='lastname'
                    onChange={changeHandler}
                    placeholder='Enter Last Name'
                    value={formData.lastname}
                />
            </label>
            </div>

            <label>
                <p>Email Address</p><sup>*</sup>
                <input 
                    required
                    type='email'
                    name='email'
                    onChange={changeHandler}
                    placeholder='Enter Email Adress'
                    value={formData.email}
                />
            </label>
           
          <div>
          <label>
                <p>Create Password</p><sup>*</sup>
                <input 
                    required
                    type={showPassword ? ("text") :("password")}
                    name='password'
                    onChange={changeHandler}
                    placeholder='Enter password'
                    value={formData.password}
                />

<span className='password-toggle' onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span> 

            </label>
            

         
            <label>
                <p>Confirm Password</p><sup>*</sup>
                <input 
                    required
                    type={showPassword ? ("text") :("password")}
                    name='confirmPassword'
                    onChange={changeHandler}
                    placeholder='Confirm password'
                    value={formData.confirmPassword}
                />

<span onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span> 

            </label>


          </div>
  
  <button>
     Create Account
  </button>

         </form>
      </div>  
    )
  }
  
  export default Signupform;