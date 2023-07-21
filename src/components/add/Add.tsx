import { GridColDef } from '@mui/x-data-grid'
import  './add.scss'

type Props = {
    slug: string,
    columns: GridColDef[],
    handleClose: React.Dispatch<React.SetStateAction<boolean>>
}

const Add = (props: Props) => {
    const {slug, columns, handleClose} = props;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //Add new Item
        //axios.post(`/api/${slug}s/`, {});
    }

    return (
        <div className='add'>
            <div className="modal">
                <span className="close" onClick={handleClose}>X</span>
                <h2>Add new {slug}</h2>

                <form onSubmit={handleSubmit}>
                    {columns
                        .filter(item => item.field !== "id" && item.field !== "img")
                        .map(column => (
                            <div className="item" key={column.field}>
                                <label htmlFor="">{column.headerName}</label>
                                <input type={column.type} placeholder={column.field}/>
                            </div>
                        ))
                    }
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Add