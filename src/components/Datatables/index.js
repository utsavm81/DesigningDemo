import React from "react";
import { Row, Col } from "reactstrap";
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";

const Datatables = (props) => {
  return (
    <>
      <PaginationProvider
        pagination={paginationFactory(props.pageOptions)}
        keyField={props.keyField}
        columns={props.columns}
        data={props.data}
      >
        {({ paginationProps, paginationTableProps }) => (
          <>
            <BootstrapTable
              classes="cursor-th"
              keyField="id"
              data={props.data}
              bordered={false}
              striped={false}
              columns={props.columns}
              {...paginationTableProps}
              rowStyle={{ cursor: "pointer" }}
              hover
              responsive
              rowEvents={props.onClickOfRow}
            />
            <br/>
            <br/>

            <div className="btn-group " role="group">
            <button
                className="btn btn-success"
                onClick={props.onPrevClick}
              >
                Prev Page
              </button>
                <h1>{props.number}</h1>
              <button
                className="btn btn-primary"
                onClick={props.onNextClick}
              >
                Next Page
              </button>
            </div>

            {/* <Row className="align-items-md-center mt-30">
              <Col className="pagination pagination-rounded justify-content-end mb-2 inner-custom-pagination">
                <PaginationListStandalone
                  {...paginationProps}
                  page={props.currentPage}
                  onPageChange={props.onPageChange}
                />
              </Col>
            </Row> */}
          </>
        )}
      </PaginationProvider>
    </>
  );
};

export default Datatables;
