import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { userColumn, userRows } from '../../datatablesource';
import { Link } from "react-router-dom";
const Datatable = () => {

    const actionColumn = [ { field: "action" , headerName: "Action" , width: 200 , renderCell:() => {
        return (
            <div className="cellAction">
                <Link to="/users/test" style={{textDecoration : "none"}}>
                    <div className="viewButton">View</div>
                </Link>
                <div className="deleteButton">Delete</div>
            </div>
        )
    } }]
  return (
    <div className="datatable">
        <div className="datatableTitle">
            ADD NEW USER
            <Link to="/users/new" className="link" style={{ textDecoration : "none"}}>
                ADD NEW USER
            </Link>
        </div>
        <DataGrid
        rows={userRows}
        columns={userColumn.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        />
    </div>
  )
}

export default Datatable