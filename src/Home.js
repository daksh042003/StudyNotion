import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const Navigate = useNavigate();

  function clickHandler() {
    Navigate("/signup");
  }

  function clickHandler1() {
    Navigate("/login");
  }

  return (
    <div className="container">
      <button className="button-instructor" onClick={clickHandler}>
        Become an instructor
      </button>

      <h1>Empower your Future with Coding Skills</h1>
      <p>
        With our online coding courses, you can learn at your own pace, from
        anywhere in the world, and get access to a wealth of resources,
        including hands-on projects, quizzes, and personalized feedback from
        instructors.
      </p>

      <button className="button-learn" onClick={clickHandler}>
        Learn More
      </button>
      <button className="button-demo" onClick={clickHandler1}>
        Book a Demo
      </button>
    </div>
  );
};

export default Home;
