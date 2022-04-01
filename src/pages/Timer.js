import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Timer = () => {
  const [value, setValue] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://swapi.dev/api/")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setValue(json);
      });
  }, []);


  return (
    <>
      {Object.keys(value).map((item, index) => (
        <div key={index} onClick={()=>navigate(`/timer/routes/${item}`)}>
          <h1>{item}</h1>
        </div>
      ))}
    </>
  );
};

export default Timer;
