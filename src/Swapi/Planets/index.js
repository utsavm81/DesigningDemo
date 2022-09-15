import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Datatables from "../../components/Datatables";


const Planets = () => {
  const params = useParams();
  const [starValue, setStarValue] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalRecords, setTotalRecords] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [nextPage, setNextPage] = useState(1);

  const columnsData = [
    {
      dataField: "name",
      text: "Name",
    },
    {
      dataField: "gravity",
      text: "Gravity",
    },
  ];

  useEffect(() => {
    fetch(`https://swapi.dev/api/${params.name}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setStarValue(json.results);
      });
  });

  const pageOptions = {
    sizePerPage: itemsPerPage,
    totalSize: totalRecords,
    custom: true,
  };

useEffect (() =>{
    fetch(`https://swapi.dev/api/${params.name}/?page=${nextPage}`)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setStarValue(json.results)
      setNextPage(json.next);
    });
  },[pageNumber]);

  return (
    <>
    {starValue&&starValue.length > 0  ? (
        <Datatables
          columns={columnsData}
          data={starValue}
          pageOptions={pageOptions}
          currentPage={pageNumber}
          onPageChange={(page) => {
           setPageNumber(page)
           setNextPage(page)
          }}
        />
      ):"Data not available"}
     
    </>
  );
};

export default Planets;
