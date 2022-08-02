import React from "react";
import useToggle from "../components/CustomHooks/toggle";

const SignIn = () => {
const [toggle, setToggle] = useToggle(false);
  console.log("Sign In");
  return (
    <div>
      <h1>Sign In</h1>
      <h1>Sign In</h1>
      <h1>Sign In</h1>
      <h1>Sign In</h1>
      <h1>Sign In</h1>
      <h1>Sign In</h1>
      <h1>Sign In</h1>
      <h1>Sign In</h1>
      <h1>Sign In</h1>
      <h1>Sign In</h1>
      <div>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
      </div>
    </div>
  );
};

export default SignIn;
