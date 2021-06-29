import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import { toast } from "react-toastify";
import axios from "axios";

const columns = [
  { field: "_id", headerName: "ID", width: 250 },
  { field: "username", headerName: "username", width: 150 },
  { field: "password", headerName: "password", width: 150 },
  { field: "role", headerName: "role", width: 150 }
];

const DataTable = () => {
  const [tableData, setTableData] = useState([]);



  useEffect(() => {
    fetch("https://secure-refuge-14993.herokuapp.com/list_users ")
      .then((data) => data.json())
      .then((data) => setTableData(data.data));
  }, [tableData]);
  
  return (
    <div style={{ height: 700, width: "100%" }}>
      {!tableData ? (
        <div className="my-4 pt-4 w-100">
          <LinearProgress color="secondary" />
        </div>
      ) : (

          <DataGrid
            getRowId={(row) => row._id}
            rows={tableData}
            columns={columns}
            pageSize={12}
          />
        )}

    </div>
  );
};

export default DataTable;