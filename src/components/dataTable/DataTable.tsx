import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import './dataTable.scss';
// import { IRows } from '../../intefaces';
import { Link } from 'react-router-dom';

type Props = {
    columns: GridColDef[],
    rows: object[],
    slug: string
}


const DataTable = ({columns, rows, slug} : Props) => {

    const handleDelete = (id: number) => {
        //Delete the item in API
        //axios.delete("/api/${slug}/${id}");
        console.log(id + " has been deleted")
    }

    const actionColumn: GridColDef = {
        field: "action",
        headerName: "Action",
        width: 100,
        renderCell: (params) => {
            return (
                <div className="action">
                    <Link to={`/${slug}/${params.row.id}`}>
                        <img src="/view.svg" alt="" />
                    </Link>
                    <div className="delete" onClick={() => handleDelete(params.row.id)}>
                        <img src="/delete.svg" alt="delete Icon" />
                    </div>
                </div>
            )
        }
    }
      
    return (
        <div className='dataTable'>
            <DataGrid
                className='dataGrid'
                rows={rows}
                columns={[...columns, actionColumn]}
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
                initialState={{
                pagination: {
                    paginationModel: {
                    pageSize: 10,
                    },
                },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
        />
        </div>
    )
}

export default DataTable