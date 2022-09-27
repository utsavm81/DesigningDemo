import React, { useContext, useEffect } from "react";
import useToggle from "../components/CustomHooks/toggle";
import { ThemeContext } from "../context";

const SignIn = () => {
  const {data, handleCurrentTheme} = useContext(ThemeContext);
  const [toggle, setToggle] = useToggle(false);

  useEffect(() => {
    handleCurrentTheme( new Date())
  }, [])
  

  return (
    <div>
      <h1>Sign In</h1>
      <div>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
      </div>
    </div>
  );
};

export default SignIn;
