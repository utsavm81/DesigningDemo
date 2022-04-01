import React from "react";
import { useParams } from "react-router-dom";
import People from "../Swapi/People";
import Planets from "../Swapi/Planets";

const RoutesValue = () => {
  const params = useParams();

  const NavigatePage = () => {
    switch (params.name) {
      case "people":
        return (
          <>
            <People />
          </>
        );
      case "planets":
        return (
          <>
            <Planets />
          </>
        );
      case "films":
        return (
          <div>
            <h1>3</h1>
          </div>
        );
      case "species":
        return (
          <div>
            <h1>4</h1>
          </div>
        );
      case "vehicles":
        return (
          <div>
            <h1>5</h1>
          </div>
        );
      case "starships":
        return (
          <div>
            <h1>6</h1>
          </div>
        );
      default:
        return <div>hello</div>;
    }
  };

  return <>{NavigatePage()}</>;
};

export default RoutesValue;
