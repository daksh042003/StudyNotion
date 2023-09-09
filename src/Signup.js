import React from 'react';
import signupImg from "./assets/signup.jpg";
import { Templates } from './Templates';

const Signup = ({setIsLoggedIn}) => {
  return (
    <Templates
    title="Join the millions learning to code with StudyNotion for free"
    desc1="Build skills for today , tomorrow, and beyond."
    desc2="Education to future-proof your career."
    image={signupImg}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}

  />
  )
}

export default Signup;