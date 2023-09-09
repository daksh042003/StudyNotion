import React from "react";
import Signupform from "./Signupform";
import { Loginform } from "./Loginform";
import { FcGoogle } from "react-icons/fc";
import "./templates.css";

export const Templates = ({
  title,
  desc1,
  desc2,
  image,
  formtype,
  setIsLoggedIn,
}) => {
  return (
    <div className="container">
      <div className="left">
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>

        {formtype === "signup" ? (
          <Signupform setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <Loginform setIsLoggedIn={setIsLoggedIn} />
        )}

        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>

        <button>
          <FcGoogle />
          <a href="https://accounts.google.com/v3/signin/challenge/pwd?TL=AJeL0C7wQu0MEakXxtbC3MKbLkRLUo2OIwly07vlNZzDQhVtxA9yY-gD0CC7AZ-S&checkConnection=youtube:344:0&checkedDomains=youtube&cid=1&continue=https://www.google.com/&dsh=S1661308841:1694253152680853&flowEntry=ServiceLogin&flowName=GlifWebSignIn&hl=en_US&ifkv=AYZoVhe2jlGLunNruCgJ_i4r_ewjhj_CNPmDvjVJpV_fWMbDgJ0z3yswTg6Epxq2Ze7RBN-mifEgDA&pstMsg=1&theme=glif">
            {" "}
            <p>Sign up with Google</p>{" "}
          </a>
        </button>
      </div>

      <div className="right">
        <img
          src={image}
          alt="Students"
          width={550}
          height={490}
          loading="lazy"
        />
      </div>
    </div>
  );
};
