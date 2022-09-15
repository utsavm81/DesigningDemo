import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Data = () => {
  const params = useParams();
  const [starValue, setStarValue] = useState([]);

  useEffect(() => {
    fetch(`https://swapi.dev/api/${params.name}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setStarValue(json.results);
      });
  },[]);

  return (
    <>
    {/* <h1>{starValue}</h1> */}
    {starValue.map((item,index)=>(
        
         <div key={index}>
         <h1>{item.name}</h1>
         {/* <h1>{item.gravity}</h1>
         <h1>{item.orbital_period}</h1>
         <h1>{item.population}</h1>
         <h1>{item.rotation_period}</h1>
         <h1>{item.surface_water}</h1>
         <h1>{item.terrain}</h1> */}
       </div>
    ))}
     
    </>
  );
};

export default Data;
