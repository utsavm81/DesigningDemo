import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Datatables from "../../components/Datatables";

const People = () => {
  const params = useParams();
  const [starValue, setStarValue] = useState([]);
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [LastValue, setlastValue] = useState();

  const columnsData = [
    {
      dataField: "name",
      text: "Name",
    },
    {
      dataField: "gender",
      text: "Gender",
    },
  ];

 

  useEffect(() => {
    debugger;
    fetch(`https://swapi.dev/api/${params.name}`)
      .then((res) => {
        debugger;
        return res.json();
      })
      .then((json) => {
        debugger;
        setStarValue(json.results);
        setNextPage(json.next);
        setPrevPage(json.previous);
      });
  }, []);

  const pageOptions = {
    custom: true,
  };

  const nextPageClick = () => {
    if (nextPage !== null) {
      fetch(nextPage)
        .then((res) => {
          debugger;
          return res.json();
        })
        .then((json) => {
          debugger;
          let numberPage = nextPage
          let stringLength= numberPage&&numberPage.length;
          let valueLength = numberPage.charAt(stringLength-1)
          setlastValue(valueLength)
          setNextPage(json.next);
          setStarValue(json.results);
          setPrevPage(json.previous)
        });
    }
  };

  const prevPageClick = () => {
    if (prevPage !== null) {
      debugger
      fetch(prevPage)
        .then((res) => {
          debugger;
          return res.json();
        })
        .then((json) => {
          debugger;
          let numberPage = prevPage
          let stringLength= numberPage&&numberPage.length;
          let valueLength = numberPage.charAt(stringLength-1)
          setlastValue(valueLength)
          setPrevPage(json.previous);
          setNextPage(json.next);
          setStarValue(json.results);
        });
    }
  };

  return (
    <>
      {starValue && starValue.length > 0 ? (
        <Datatables
          columns={columnsData}
          data={starValue}
          pageOptions={pageOptions}
          onPrevClick={prevPageClick}
          onNextClick={nextPageClick}
          number={LastValue}
        />
      ) : (
        "Data not available"
      )}
    </>
  );
};

export default People;
