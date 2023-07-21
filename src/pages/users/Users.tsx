import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DataTable from '../../components/dataTable/DataTable';
import './users.scss';
import { userRows } from '../../data';
import { useState } from 'react';
import Add from '../../components/add/Add';
import { useModalState } from '../../hooks/useModalState';

const columns: GridColDef[] = [
    { 
        field: 'id', 
        headerName: 'ID', 
        width: 90 
    },
    {
        field: "img",
        headerName: "Avatar",
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />
        }
    },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    // {
    //     field: 'age',
    //     headerName: 'Age',
    //     type: 'number',
    //     width: 110,
    //     editable: true,
    // },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        type: 'string',
        width: 110,
        editable: true,
    },
    {
        field: 'createdAt',
        headerName: 'Created At',
        type: 'string',
        width: 110,
        editable: false,
    },
    {
        field: "verified",
        headerName: "Verified",
        width: 100,
        type: "boolean"
    },
];    

const Users = () => {
    const { open, handleCreatClick, handleClose } = useModalState();

    return (
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button onClick={handleCreatClick}>Add new User</button>
            </div>
            <DataTable slug="users" columns={columns} rows={userRows} />
            {open && <Add slug='user' columns={columns} handleClose={handleClose} />}
        </div>
    )
}

export default Users;
