import React, { useContext } from "react";
import useToggle from "../components/CustomHooks/toggle";
import { ThemeContext } from "../context";

const SignIn = () => {
  const {data} = useContext(ThemeContext);
  const [toggle, setToggle] = useToggle(false);

  const {value, ...styleData} = data

  return (
    <div>
      <h1 style={styleData} >Sign In</h1>
      <div>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
      </div>
    </div>
  );
};

export default SignIn;
